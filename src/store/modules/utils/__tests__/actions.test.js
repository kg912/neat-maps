import actions from '../actions';

const {
	FILTER_OPTIONS,
	ENABLE_SELECTS,
	INIT_SELECT_VALUE,
	SET_TABLE_DATA,
	TOGGLE_RESET_BUTTON,
	RESET
} = actions;

describe('Util Actions', () => {
	it(`should create a ${FILTER_OPTIONS} action to filter options list`, () => {
		const options = [];
		const expectedAction = {
			type: FILTER_OPTIONS,
			options
		};
		expect(actions.filterOptions(options)).toEqual(expectedAction);
	});

	it(`should create an ${ENABLE_SELECTS} action to enable Select components`, () => {
		const expectedAction = {
			type: ENABLE_SELECTS,
		};
		expect(actions.enableSelects()).toEqual(expectedAction);
	});

	it(`should create an ${INIT_SELECT_VALUE} action to initialize select values`, () => {
		const value = 'SELECT';
		const id = 'component_ID';
		const expectedAction = {
			type: INIT_SELECT_VALUE,
			value,
			id
		};
		expect(actions.initSelectValue(value, id)).toEqual(expectedAction);
	});

	it(`should create a ${SET_TABLE_DATA} action to set table data`, () => {
		const tableData = [{}];
		const expectedAction = {
			type: SET_TABLE_DATA,
			tableData
		};
		expect(actions.setTableData(tableData)).toEqual(expectedAction);
	});

	it(`should create a ${TOGGLE_RESET_BUTTON} action to toggle reset button`, () => {
		const expectedAction = {
			type: TOGGLE_RESET_BUTTON
		};
		expect(actions.toggleResetButton()).toEqual(expectedAction);
	});

	it(`should create a ${RESET} action to reset store`, () => {
		const expectedAction = {
			type: RESET
		};
		expect(actions.reset()).toEqual(expectedAction);
	});
});