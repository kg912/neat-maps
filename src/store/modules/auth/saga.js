import { all, takeEvery, put, fork, take, cancelled, call} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from './actions';

const apiURL = 'http://neat-mvp-api.herokuapp.com/v1/users/';

export function* loginRequest() {
	yield takeEvery('LOGIN_REQUEST', function*({ email, password, showNotification }) {
		// login API request
		if(email && password ) {
			const response = yield call(
				fetch,
				`${apiURL}user_JmxDuYS66eDXczz`
			);
			const userData = yield call([response, response.json]);
			if (email === userData.email && password === '12345') {
				const { first_name, last_name } = userData;
				showNotification('success', `${first_name} ${last_name}`);
				yield put({
					type: actions.LOGIN_SUCCESS,
					userData
				})
			}
			else {
				showNotification('error', null);
			}
		}

	});
}

export function* loginSuccess() {
	yield takeEvery('LOGIN_SUCCESS', function*({ userData }) {
		console.log('LOGIN SUCCESS!');
		yield put(push('/home'));
	});
}


export default function* rootSaga() {
	yield all([
		fork(loginRequest),
		fork(loginSuccess)
	]);
}
