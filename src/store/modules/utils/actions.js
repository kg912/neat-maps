const utilActions = {
	FILTER_OPTIONS: 'FILTER_OPTIONS',
	INIT_OPTIONS: 'INIT_OPTIONS',
	INIT_SELECT_STATES: 'INIT_SELECT_STATES',
	ENABLE_SELECTS: 'ENABLE_SELECTS',
	UPDATE_SELECT_VALUE: 'UPDATE_SELECT_VALUE',
	RESET_SELECT_VALUE: 'RESET_SELECT_VALUE',
	filterOptions: (options) => ({
		type: utilActions.FILTER_OPTIONS,
		options
	}),
	enableSelects: () => ({
		type: utilActions.ENABLE_SELECTS,
	})
};
export default utilActions;