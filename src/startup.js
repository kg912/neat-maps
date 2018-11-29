import mapActions from './store/modules/maps/actions';

const { loadedScript } = mapActions;
const config = {
	key: 'AIzaSyDHegqbZEeLaLfvz80ybfpEFqbiDvKa9iQ',
	cbName: 'googleMapsAPILoaded',
	v: 3.35,
	libraries: 'places',
};

export default function startup(store) {
	let google
	const script = document.createElement('script');
	script.src = mapUrl(config);
	window.googleMapsAPILoaded = () => {
		google = global.google;
		store.dispatch(loadedScript(google));
		if (global[config.cbName] && typeof global[config.cbName] === 'function') {
			global[config.cbName] = null;
		}
	};
	document.querySelector('head').appendChild(script);
}

const mapUrl = ({ key, v, libraries, cbName }) =>
	`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=${libraries}&v=${v}&callback=${cbName}&language=en`;