import { testSaga } from 'redux-saga-test-plan';
import { resolveAddresses, createMarkers, beginLoading } from '../saga';
import rootSaga from '../saga';
import actions from '../actions';

const { ADDRESS_LIST, BEGIN_LOADING } = actions;

describe('testing Map sagas', () => {
	it('testing rootSaga', () => {
		testSaga(rootSaga)
			.next()
			.fork(resolveAddresses)
			.next()
			.fork(beginLoading)
	});

	it('testing resolveAddresses saga', () => {
		testSaga(resolveAddresses)
			.next()
			.takeEveryEffect(ADDRESS_LIST, createMarkers)
			.finish()
			.isDone();
	});


	it('test beginLoading saga', () => {
		testSaga(beginLoading)
			.next()
			.take(ADDRESS_LIST)
			.next()
			.put({
				type: BEGIN_LOADING
			})
	});
});