import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { loginRequest, authenticate, loginSuccess } from '../saga';
import rootSaga from '../saga';
import actions from '../actions';

const { login, logout, LOGIN_REQUEST } = actions;

const email = "test@neatmaps.com";
const password = "12345";
const message = {
	success: () => true,
	error: () => false
};

const loginAction = login({ email, password, message });

describe('testing Auth sagas', () => {
	it('testing rootSaga', () => {
		testSaga(rootSaga)
			.next()
			.fork(loginRequest)
			.next()
			.fork(loginSuccess)
	});

	it('testing loginRequest saga', () => {
		testSaga(loginRequest)
			.next()
			.takeEveryEffect(LOGIN_REQUEST, authenticate)
			.finish()
			.isDone();
	});

	it('testing successful authentication', () => {
		const userData = {
			"id":"user_JmxDuYS66eDXczz",
			"created_at":1543307304,
			"email":"test@neatmaps.com",
			"first_name":"Jon",
			"last_name":"Lark",
			"admin":true,
			"account":{
				"id":136,
				"uuid":"acc_fVmwbVSCsyTLdBnr",
				"created_at":"2018-11-27 08:28:24 +0000",
				"balance":"0.3E4",
				"name":"Jon",
				"status":"active",
				"livemode":true,
				"user_id":138,
				"card_number":"1111222233334444"
			}
		};
		return expectSaga(authenticate, loginAction)
			.provide([matchers.call.fn(fetch), userData])
			.dispatch({
				type: actions.LOGIN_SUCCESS,
				userData
			})
			.run()
	});

	it('testing unsuccessful authentication', () => {
		const error = new Error('No such user. Please try again');
		return expectSaga(authenticate, loginAction)
			.provide([matchers.call.fn(fetch), throwError(error)])
			.dispatch({ type: actions.LOGIN_ERROR, error })
			.run();
	});

	it('test loginSuccess saga', () => {
		testSaga(loginSuccess)
			.next()
			.take(actions.LOGIN_SUCCESS)
			.next()
			.put({
				type: '@@router/CALL_HISTORY_METHOD',
				payload: { method: 'push', args: [ '/home' ] }
			})
	});
});