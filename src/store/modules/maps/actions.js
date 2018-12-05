const mapActions = {
	ADDRESS_LIST: 'ADDRESS_LIST',
	BEGIN_LOADING: 'BEGIN_LOADING',
	RESOLVED_ADDRESS_LIST: 'RESOLVED_ADDRESS_LIST',
	CLEAR_ADDRESS_LIST: 'CLEAR_ADDRESS_LIST',
	SCRIPT_LOADED: 'SCRIPT_LOADED',
	SET_MAP: 'SET_MAP',
	RESET: 'RESET',
	setAddressList: (addressList, message) => ({
		type: mapActions.ADDRESS_LIST,
		addressList,
		message
	}),
	loadedScript: (google) => ({
		type: mapActions.SCRIPT_LOADED,
		google,
	}),

};
export default mapActions;