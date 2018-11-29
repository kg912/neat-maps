import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class MapContainer extends React.Component {
	constructor(props){
		super(props);
		this.map = null;
		this.state = {
			google: null,
		}
	}

	static getDerivedStateFromProps(nextProps, state) {
		if(nextProps.google !== state.google) {
			return {
				google: nextProps.google
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

	loadMap() {
		const { google } = this.state;
		if(google) {
			if(google.maps) {
				const maps = google.maps;
				const mapRef = this.refs.map;
				const node = ReactDOM.findDOMNode(mapRef);
				let zoom = 9;
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

	render(){
		return (
			<div ref='map' style={{minHeight: '60vh', height:'100%'}}>
				Loading map...
			</div>
		)
	}
}

export default connect(state => ({
	google: state.Maps.get('google'),
}), null)(MapContainer);