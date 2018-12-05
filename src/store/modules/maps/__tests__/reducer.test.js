import { Map } from "immutable";
import actions from '../actions';
import reducer from '../reducer';

const {
	BEGIN_LOADING,
	RESOLVED_ADDRESS_LIST,
	SCRIPT_LOADED,
	RESET,
} = actions;

const initState = new Map({
	coordsList: [],
	google: {},
	loading: false,
});

const coordsList = [{ latLng: '124, 123', setMap: () => true }];

const google = { maps: { geocoder: () => true }};

describe('Maps reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initState);
	});

	it(`reducer handles ${BEGIN_LOADING} action`, () => {
		expect(
			reducer(initState, {
				type: BEGIN_LOADING,
			})
		).toEqual(initState.set('loading', true));
	});

	it(`reducer handles ${RESOLVED_ADDRESS_LIST} action`, () => {
		const mockState = initState.set('loading', true);
		expect(
			reducer(mockState, {
				type: RESOLVED_ADDRESS_LIST,
				coordsList
			})
		).toEqual(mockState.set('coordsList', coordsList)
			.set('loading', false));
	});

	it(`reducer handles ${SCRIPT_LOADED} action`, () => {
		expect(
			reducer(initState, {
				type: SCRIPT_LOADED,
				google,
			})
		).toEqual(initState.set('google', google));
	});

	it(`reducer handles ${RESET} action`, () => {
		const mockState = initState.set('coordsList', coordsList)
			.set('google', google);
		expect(
			reducer(mockState, {
				type: RESET,
			})
		).toEqual(initState.set('google', google));
	});
});