import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import utilActions from '../../../../store/modules/utils/actions';

const { selectColumn } = utilActions;

class CustomSelect extends Component {
	constructor() {
		super();
		this.state = {
			options: []
		}
	}

	render() {
		const { colIndex, handleChange, options, disabled } = this.props;
		return (
			<Select defaultValue='SELECT' disabled={disabled} onChange={(value) => {
				handleChange(value, colIndex);
			}}>
				{options.map(elm => <Select.Option key={elm}>{elm.toUpperCase()}</Select.Option>)}
			</Select>
		)
	}
}
//this.state.options.map(elm => <Select.Option key={elm}>{elm.toUpperCase()}</Select.Option>)}

export default connect(state => ({
	options: state.Utils.get('options'),
	disabled: state.Utils.get('disabled')
}), null)(CustomSelect);