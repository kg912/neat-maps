const authActions = {
	LOGIN_REQUEST: 'LOGIN_REQUEST',
	FETCH_USER_DATA: 'GET_USER_DATA',
	USER_DATA: 'USER_DATA',
	USER_DATA_UPDATE: 'USER_DATA_UPDATE',
	LOGOUT: 'LOGOUT',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_ERROR: 'LOGIN_ERROR',
	login: (email, password, message) => ({
		type: authActions.LOGIN_REQUEST,
		email,
		password,
		message
	}),
	logout: () => ({
		type: authActions.LOGOUT,
	})
};
export default authActions;