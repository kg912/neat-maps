import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
	coordsList: [],
	google: {},
	loading: false,
});

export default function (
	state = initState,
	action
) {
	switch (action.type) {
		case actions.BEGIN_LOADING:
			return state.set('loading', true);
		case actions.RESOLVED_ADDRESS_LIST:
			return state.set('coordsList', action.coordsList)
				.set('loading', false);
		case actions.SCRIPT_LOADED:
			return state.set('google', action.google);
		case actions.CLEAR_ADDRESS_LIST:
			return initState;
		default:
			return state;
	}
}