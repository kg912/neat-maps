import { Map } from 'immutable';
import actions from './actions';
import isEmpty from 'lodash/isEmpty';

const initState = new Map({
	options: [
		'address',
		'city',
		'state',
		'zipcode',
		'category'
	],
	disabled: true,
	tableData: [],
	selectValues: {
		col0: 'SELECT',
		col1: 'SELECT',
		col2: 'SELECT',
		col3: 'SELECT',
		col4: 'SELECT',
	},
	resetDisabled: true,
});

export default function (
	state = initState,
	action
) {
	switch (action.type) {
		case actions.FILTER_OPTIONS:
			return state.set('options', action.options);
		case actions.ENABLE_SELECTS:
			return state.set('disabled', false);
		case actions.INIT_SELECT_VALUE:
			const currentVals = state.get('selectValues');
			currentVals[action.id] = action.value;
			return state.set('selectValues', currentVals);
		case actions.SET_TABLE_DATA:
			return state.set('tableData', action.tableData);
		case actions.TOGGLE_RESET_BUTTON:
			const resetState = state.get('resetDisabled');
			return state.set('resetDisabled', !resetState);
		case actions.RESET:
			return initState.set('selectValues', {
				col0: 'SELECT',
				col1: 'SELECT',
				col2: 'SELECT',
				col3: 'SELECT',
				col4: 'SELECT',
			});
		default:
			return state;
	}
}