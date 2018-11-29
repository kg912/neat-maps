import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
	options: [
		'address',
		'city',
		'state',
		'zipcode',
		'category'
	],
	disabled: true,
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
		default:
			return state;
	}
}