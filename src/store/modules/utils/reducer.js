import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
	idToken: '',
	options: [
		'address',
		'city',
		'state',
		'zipcode',
		'category'
	],
});

export default function (
	state = initState,
	action
) {
	switch (action.type) {
		case actions.SELECT_COLUMN:
			const filteredOptions = state.get('options').filter(elm => elm !== action.name);
			return state.set('options', filteredOptions);
		default:
			return state;
	}
}