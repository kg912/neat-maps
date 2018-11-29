const utilActions = {
	FILTER_OPTIONS: 'FILTER_OPTIONS',
	INIT_OPTIONS: 'INIT_OPTIONS',
	ENABLE_SELECTS: 'ENABLE_SELECTS',
	filterOptions: (options) => ({
		type: utilActions.FILTER_OPTIONS,
		options
	}),
	enableSelects: () => ({
		type: utilActions.ENABLE_SELECTS,
	})
};
export default utilActions;