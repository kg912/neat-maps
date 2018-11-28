import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Map,
	Marker,
	GoogleApiWrapper
} from 'google-maps-react';
import styled from 'styled-components';
import { Card } from 'antd';


export class MapContainer extends Component {
	render() {
		return (
			<Map id='react-google-maps' google={this.props.google} zoom={14} style={{
				height: '50%',
				width: '100%',
			}}/>
		);
	}

}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDHegqbZEeLaLfvz80ybfpEFqbiDvKa9iQ'
})(MapContainer);