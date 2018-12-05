import { Map } from "immutable";
import actions from '../actions';
import reducer from '../reducer';

const {
	LOGIN_REQUEST,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	LOGOUT,
} = actions;

const initState = new Map({
	idToken: '',
	user: {},
	userInfo: {},
	loading: false,
	authenticated: false,
});

describe('Auth reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initState);
	});

	it(`reducer handles ${LOGIN_REQUEST} action`, () => {
		expect(
			reducer(initState, {
				type: LOGIN_REQUEST
			})
		).toEqual(initState.set('loading', true));
	});

	it(`reducer handles ${LOGIN_ERROR} action`, () => {
		const mockState = initState.set('loading', true);
		expect(
			reducer(mockState, {
				type: LOGIN_ERROR
			})
		).toEqual(mockState.set('loading', false));
	});

	it(`reducer handles ${LOGIN_SUCCESS} action`, () => {
		expect(
			reducer(initState, {
				type: LOGIN_SUCCESS,
				userData: {}
			})
		).toEqual(initState.set('userData', {}).set('authenticated', true));
	});

	it(`reducer handles ${LOGOUT} action`, () => {
		expect(
			reducer(initState, {
				type: LOGOUT,
			})
		).toEqual(initState);
	});
});