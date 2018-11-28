const utilActions = {
	SELECT_COLUMN: 'SELECT_COLUMN',
	INIT_OPTIONS: 'INIT_OPTIONS',
	selectColumn: (name) => ({
		type: utilActions.SELECT_COLUMN,
		name
	}),
};
export default utilActions;