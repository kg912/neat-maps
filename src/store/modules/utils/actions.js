const utilActions = {
	FILTER_OPTIONS: 'FILTER_OPTIONS',
	INIT_OPTIONS: 'INIT_OPTIONS',
	INIT_SELECT_VALUE: 'INIT_SELECT_VALUE',
	ENABLE_SELECTS: 'ENABLE_SELECTS',
	UPDATE_SELECT_VALUE: 'UPDATE_SELECT_VALUE',
	RESET_SELECT_VALUE: 'RESET_SELECT_VALUE',
	SET_TABLE_DATA: 'SET_TABLE_DATA',
	TOGGLE_RESET_BUTTON: 'TOGGLE_RESET_BUTTON',
	RESET: 'RESET',
	filterOptions: (options) => ({
		type: utilActions.FILTER_OPTIONS,
		options
	}),
	enableSelects: () => ({
		type: utilActions.ENABLE_SELECTS,
	}),
	initSelectValue: (value, id) => ({
		type: utilActions.INIT_SELECT_VALUE,
		value,
		id,
	}),
	setTableData: (tableData) => ({
		type: utilActions.SET_TABLE_DATA,
		tableData
	}),
	toggleResetButton: () => ({
		type: utilActions.TOGGLE_RESET_BUTTON,
	}),
	reset: () => ({
		type: utilActions.RESET
	})
};
export default utilActions;