import React, { Component } from 'react';
import ReactCSVReader from 'react-csv-reader';


export default class CSVReader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onCSVLoad: props.onCSVLoad
		}
	}

	render() {
		const { onCSVLoad } = this.state;
		return (
			<div className='csv-input-container'>
				Choose CSV
				<ReactCSVReader
					label=""
					onFileLoaded={onCSVLoad}
				/>
			</div>
		);
	}
}