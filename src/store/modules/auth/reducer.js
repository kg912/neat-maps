import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
	idToken: '',
	user: {},
	userInfo: {}
});

export default function (
	state = initState,
	action
) {
	switch (action.type) {
		case actions.LOGIN_SUCCESS:
			return state;
		case actions.USER_DATA:
			return state;
		case actions.USER_DATA_UPDATE:
			const { userInfo } = action.payload;
			return state.set('userInfo', userInfo);
		case actions.LOGOUT:
			return initState;
		default:
			return state;
	}
}
