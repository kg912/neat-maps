import { all, takeEvery, put, fork, take, cancelled, call} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from './actions';

const apiUrl = 'http://neat-mvp-api.herokuapp.com/v1/auth';

export function* loginRequest() {
	yield takeEvery('LOGIN_REQUEST', function*({ email, password, message }) {
		// login API request
		if(email && password ) {
			 // body data type must match "Content-Type" header
			const request = yield call(fetch, apiUrl, {
				method: 'post',
				headers: new Headers({
					'Content-Type': 'application/x-www-form-urlencoded'
				}),
				body: `email=${email}&password=${password}`
			});
			const response = yield call([request, request.json]);
			if(!response.error) {
				const { first_name, last_name } = response;
				message.success(`Welcome, ${first_name} ${last_name}!`);
				yield put({
					type: actions.LOGIN_SUCCESS,
					userData: response
				})
			}
			else {
				message.error('No such user. Please try again');
				yield put({
					type: actions.LOGIN_ERROR
				})
			}
		}

	});
}

export function* loginSuccess() {
	yield takeEvery('LOGIN_SUCCESS', function*({ userData }) {
		yield put(push('/home'));
	});
}


export default function* rootSaga() {
	yield all([
		fork(loginRequest),
		fork(loginSuccess)
	]);
}
