import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import ColumnSelect from '../Select/index';
import tableModel from './tableModel';
import values from 'lodash/values';
import utilActions from '../../../../store/modules/utils/actions';

const { selectColumn } = utilActions;


class CustomTable extends Component {
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

	columnGen = (num) => {
		const columns = [];
		for(let x = 0; x < num; x++) {
			columns.push({
				title: <ColumnSelect handleChange={this.handleSelectChange} colIndex={x}/>,
				dataIndex: `col${x}`,
				key: `col${x}`,
			});
		}
		return columns;
	};


	handleSelectChange = (value, index) => {
		const { colData } = this.state;
		colData[index] = value;
		this.props.selectColumn(value);
		this.setState({ colData });
	};

	render() {
		return (
			<Table dataSource={this.state.dataSource} columns={this.columnGen(5)} />
		)
	}
}

export default connect(null, { selectColumn })(CustomTable);