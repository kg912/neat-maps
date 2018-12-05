import { Map } from "immutable";
import actions from '../actions';
import reducer from '../reducer';

const {
	FILTER_OPTIONS,
	ENABLE_SELECTS,
	INIT_SELECT_VALUE,
	SET_TABLE_DATA,
	TOGGLE_RESET_BUTTON,
	RESET
} = actions;

const initState = new Map({
	options: [
		'address',
		'city',
		'state',
		'zipcode',
		'category'
	],
	disabled: true,
	tableData: [],
	selectValues: {
		col0: 'SELECT',
		col1: 'SELECT',
		col2: 'SELECT',
		col3: 'SELECT',
		col4: 'SELECT',
	},
	resetDisabled: true,
});

describe('Utils reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initState);
	});
	it(`reducer handles ${FILTER_OPTIONS} action`, () => {
		const options = [
			'city',
			'state'
		];
		expect(
			reducer(initState, {
				type: FILTER_OPTIONS,
				options
			})
		).toEqual(initState.set('options', options));
	});
	it(`reducer handles ${ENABLE_SELECTS} action`, () => {
		expect(
			reducer(initState, {
				type: ENABLE_SELECTS,
			})
		).toEqual(initState.set('disabled', false));
	});
	it(`reducer handles ${INIT_SELECT_VALUE} action`, () => {
		const finalValues = {
			col0: 'SELECT',
			col1: 'ADDRESS',
			col2: 'SELECT',
			col3: 'SELECT',
			col4: 'SELECT',
		};
		expect(
			reducer(initState, {
				type: INIT_SELECT_VALUE,
				id: 'col1',
				value: 'ADDRESS',
			})
		).toEqual(initState.set('selectValues', finalValues));
	});
	it(`reducer handles ${SET_TABLE_DATA} action`, () => {
		const tableData = [{}];
		expect(
			reducer(initState, {
				type: SET_TABLE_DATA,
				tableData
			})
		).toEqual(initState.set('tableData', tableData));
	});
	it(`reducer handles ${TOGGLE_RESET_BUTTON} action`, () => {
		const resetState = !initState.get('resetDisabled');
		expect(
			reducer(initState, {
				type: TOGGLE_RESET_BUTTON,
			})
		).toEqual(initState.set('resetDisabled', resetState));
	});
	it(`reducer handles ${RESET} action`, () => {
		const mockState = initState.set('selectValues', {
			col0: 'ADDRESS',
			col1: 'STATE',
			col2: 'CITY',
			col3: 'ZIPCODE',
			col4: 'CATEGORY',
		});
		expect(
			reducer(mockState, {
				type: RESET,
			})
		).toEqual(initState.set('selectValues', {
			col0: 'SELECT',
			col1: 'SELECT',
			col2: 'SELECT',
			col3: 'SELECT',
			col4: 'SELECT',
		}));
	});
});