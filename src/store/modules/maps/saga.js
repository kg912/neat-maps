import { all, takeEvery, put, fork, take, cancelled, call} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import actions from './actions';

const { ADDRESS_LIST, RESOLVED_ADDRESS_LIST } = actions;

export function* resolveAddresses() {
	yield takeEvery(ADDRESS_LIST, function*({ addressList, message }) {
		const { google: { maps } } = window;
		const coordsList = [];
		const geocoder = new maps.Geocoder();
		if(addressList !== null) {
			const geoList = [];
			let color;
			for (let category in addressList) {
				color = getRandomColor();
				addressList[category].forEach(address => {
					geoList.push({ color, address, category })
				});
			}
			yield put({
				type: 'TOGGLE_RESET_BUTTON'
			});
			for (let d = 0; d < geoList.length; d++) {
				const { address, color, category } = geoList[d];
				yield call(delay, 500);
				geocoder.geocode({address: address}, (results, status) => {
						if (status === maps.GeocoderStatus.OK) {
							if(d%2 === 1) {
								window.map.setCenter(results[0].geometry.location);
							}

							let contentString = `<div id="content">
								<h1 id="firstHeading" class="firstHeading">${category}</h1>
								<div id="bodyContent">
								<p>${address}</p>
								</div>
								</div>`;

							const marker = new maps.Marker({
								map: window.map,
								position: results[0].geometry.location,
								icon: {
									path: maps.SymbolPath.CIRCLE,
									strokeColor: color,
									scale: 8
								},
							});
							let infowindow = new maps.InfoWindow({
								content: contentString
							});

							marker.addListener('click', function() {
								infowindow.open(window.map, marker);
							});

							coordsList.push(marker);
						}
						else {
							// === if we were sending the requests to fast, try this one again and increase the delay
							if (status == maps.GeocoderStatus.OVER_QUERY_LIMIT) {
								console.error(`too many requests!`);
							} else {
								message.error(`no location found for ${address}`);
								console.error(`Geocode was not successful for the following reason: ${status}`)
							}
						}
					}
				);
			}
			yield call(delay, 100);
			message.success('Address geocoding complete!');
			yield put({
				type: RESOLVED_ADDRESS_LIST,
				coordsList,
			});
			yield put({
				type: 'TOGGLE_RESET_BUTTON'
			});
		}
	});
}

export function* beginLoading() {
	yield takeEvery(ADDRESS_LIST, function*(action) {
		yield put({
			type: actions.BEGIN_LOADING,
		})
	})
};

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


export default function* rootSaga() {
	yield all([
		fork(resolveAddresses),
		fork(beginLoading)
	]);
}
