import { all } from 'redux-saga/effects';
import authSagas from './modules/auth/saga';
import mapSagas from './modules/maps/saga';

export default function* rootSaga(getState) {
	yield all([
		authSagas(),
		mapSagas(),
	]);
}