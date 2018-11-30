import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import utilActions from '../../../../store/modules/utils/actions';

const { initSelectValue } = utilActions;

export class CustomSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [],
			value: 'SELECT',
		};
		props.initSelectValue('SELECT', props.id);
	}


	render() {
		const { colIndex, handleChange, options, disabled, id, initSelectValue, selectValues } = this.props;
		return (
			<Select disabled={disabled} value={selectValues[id].toUpperCase()} onChange={(value) => {
				initSelectValue(value, id);
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
	selectValues: state.Utils.get('selectValues')
}), { initSelectValue })(CustomSelect);