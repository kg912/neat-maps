import { all } from 'redux-saga/effects';
import authSagas from './modules/auth/saga';

export default function* rootSaga(getState) {
	yield all([
		authSagas(),
	]);
}