import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { message } from 'antd';
import ColumnSelect from '../Select/index';
import tableModel from './tableModel';
import zipObject from 'lodash/zipObject';
import invert from 'lodash/invert';
import values from 'lodash/values';
import without from 'lodash/without';
import utilActions from '../../../../store/modules/utils/actions';
import mapActions from '../../../../store/modules/maps/actions';

const { filterOptions, enableSelects } = utilActions;
const { setAddressList } = mapActions;


const initialOptions = [
	'address',
	'city',
	'state',
	'zipcode',
	'category'
];


export class CustomTable extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: [],
			colData: {
				0: null,
				1: null,
				2: null,
				3: null,
				4: null,
			},
		};
	}

	static getDerivedStateFromProps(nextProps, state) {
		if(nextProps.dataSource !== state.dataSource) {
			return {
				dataSource: tableModel(nextProps.dataSource)
			}
		}
		return null;
	}

	componentDidUpdate() {
		this.props.enableSelects();
	}

	columnGen = (num) => {
		const columns = [];
		for(let x = 0; x < num; x++) {
			columns.push({
				title: <ColumnSelect handleChange={this.handleSelectChange} colIndex={x} id={`col${x}`}/>,
				dataIndex: `col${x}`,
				key: `col${x}`,
			});
		}
		return columns;
	};


	handleSelectChange = (value, index) => {
		const { colData, dataSource } = this.state;
		const { filterOptions, setAddressList } = this.props;
		colData[index] = value;
		this.setState({ colData });
		const selectedOptions = values(colData);
		filterOptions(without(initialOptions, ...selectedOptions));
		for (let key in colData) {
			if(colData[key] == null) {
				return;
			}
		}
		if(dataSource !== null) {
			const invertedData = invert(colData);
			const addressCol = invertedData['address'];
			const categoryCol = invertedData['category'];
			const categories = [];
			dataSource.forEach(item => {
				categories.push(item[`col${categoryCol}`]);
			});
			const uniqueCategories = zipObject(categories.filter(this.getUniqueValues), []);
			dataSource.forEach(item => {
				if(!uniqueCategories[item[`col${categoryCol}`]]) {
					uniqueCategories[item[`col${categoryCol}`]]= [];
				}
				uniqueCategories[item[`col${categoryCol}`]].push(item[`col${addressCol}`]);
			});
			setAddressList(uniqueCategories, message);
		}
	};

	getUniqueValues(value, index, self) {
		return self.indexOf(value) === index;
	}

	render() {
		return (
			<Table dataSource={this.state.dataSource} columns={this.columnGen(5)} />
		)
	}
}

export default connect(null, { filterOptions, setAddressList, enableSelects })(CustomTable);