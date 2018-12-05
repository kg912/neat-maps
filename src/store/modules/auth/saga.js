import { takeEvery, take, put, fork, call} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from './actions';

const apiUrl = 'http://neat-mvp-api.herokuapp.com/v1/auth';

export const requestProps = (email, password) => [
	apiUrl,
	{
		method: 'post',
		headers: new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		}),
		body: `email=${email}&password=${password}`
	}
];

export function* loginRequest() {
	yield takeEvery(actions.LOGIN_REQUEST, authenticate);
}

export function* authenticate({ email, password, message }) {
	// login API request
	if(email && password ) {
		// body data type must match "Content-Type" header
		const request = yield call(fetch, ...requestProps(email, password));
		const response = yield call([request, request.json]);
		if(!response.error) {
			const { first_name, last_name } = response;
			message.success(`Welcome, ${first_name} ${last_name}!`);
			yield put({
				type: actions.LOGIN_SUCCESS,
				userData: response
			});
			return response;
		}
		else {
			message.error('No such user. Please try again');
			yield put({
				type: actions.LOGIN_ERROR
			});
			return response;
		}
	}

}

export function* loginSuccess() {
	yield take(actions.LOGIN_SUCCESS);
	yield put(push('/home'));
}


export default function* rootSaga() {
	yield fork(loginRequest);
	yield fork(loginSuccess);
}
