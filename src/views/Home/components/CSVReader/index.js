import React, { Component } from 'react';
import { Button } from  'antd';
import ReactCSVReader from 'react-csv-reader';


export default class CSVReader extends Component {
	constructor() {
		super();
	}

	render() {
		const { onCSVLoad } = this.props;
		return (
			<ReactCSVReader
				label=""
				onFileLoaded={onCSVLoad}
			/>
		);
	}
}