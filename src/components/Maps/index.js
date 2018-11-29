import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class MapContainer extends React.Component {
	constructor(props){
		super(props);
		this.map = null;
		this.state = {
			google: null,
			coordsList: []
		}
	}

	static getDerivedStateFromProps(nextProps, state) {
		if(nextProps.google !== state.google) {
			return {
				google: nextProps.google
			}
		}
		if(nextProps.coordsList !== state.coordsList) {
			return {
				coordsList: nextProps.coordsList
			}
		}
		return null;
	}

	componentDidMount() {
		const { google } = this.state;
		if(google.maps) {
			this.loadMap();
		}
	}

	componentDidUpdate() {
		const { google } = this.state;
		if(google) {
			this.loadMap();
		}
	}

	loadMap() {
		const { google } = this.state;
		if(google) {
			if(google.maps) {
				const maps = google.maps;
				const mapRef = this.refs.map;
				const node = ReactDOM.findDOMNode(mapRef);
				let zoom = 8;
				let lat = 37.774929;
				let lng = -122.419416;
				const center = new maps.LatLng(lat, lng);
				const mapConfig = Object.assign({}, {
					center: center,
					zoom: zoom
				});
				this.map = new maps.Map(node, mapConfig);
				window.map = this.map;
			}
		}
	}


	geocodeAddress({ address, color }) {
		let geocoder;
		const { google } = this.state;
		const self = this;
		if(google.maps) {
			geocoder = new google.maps.Geocoder();
			geocoder.geocode({'address': address}, function(results, status) {
				if (status === 'OK') {
					self.map.setCenter(results[0].geometry.location);
					let marker = new google.maps.Marker({
						map: self.map,
						position: results[0].geometry.location,
						icon: {
							path: google.maps.SymbolPath.CIRCLE,
							strokeColor: color,
							scale: 9
						},
					});
				} else {
					console.error(`Geocode was not successful for the following reason: ${status}`);
				}
			});
		}
	}


	render(){
		return (
			<div ref='map' style={{minHeight: '60vh', height:'100%'}}>
				Loading map...
			</div>
		)
	}
}

export default connect(state => ({
	coordsList: state.Maps.get('addresses'),
	google: state.Maps.get('google'),
}), null)(MapContainer);