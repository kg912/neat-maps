import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';

export class CustomSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [],
			value: 'SELECT',
			id: props.id
		};
	}


	render() {
		const { colIndex, handleChange, options, disabled, id } = this.props;
		return (
			<Select defaultValue='SELECT' disabled={disabled} onChange={(value) => {
				handleChange(value, colIndex);
			}}>
				{options.map(elm => <Select.Option key={elm}>{elm.toUpperCase()}</Select.Option>)}
			</Select>
		)
	}
}


export default connect(state => ({
	options: state.Utils.get('options'),
	disabled: state.Utils.get('disabled'),
}), null)(CustomSelect);