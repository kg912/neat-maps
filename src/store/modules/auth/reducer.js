import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
	idToken: '',
	user: {},
	userInfo: {},
	loading: false,
	authenticated: false,
});

export default function (
	state = initState,
	action
) {
	switch (action.type) {
		case actions.LOGIN_REQUEST:
			return state.set('loading', true);
		case actions.LOGIN_SUCCESS:
			return state.set('userData', action.userData)
				.set('authenticated', true);
		case actions.LOGIN_ERROR:
			return state.set('loading', false);
		case actions.LOGOUT:
			return initState;
		default:
			return state;
	}
}
