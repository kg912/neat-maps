const mapActions = {
	ADDRESS_LIST: 'ADDRESS_LIST',
	BEGIN_LOADING: 'BEGIN_LOADING',
	RESOLVED_ADDRESS_LIST: 'RESOLVED_ADDRESS_LIST',
	CLEAR_ADDRESS_LIST: 'CLEAR_ADDRESS_LIST',
	SCRIPT_LOADED: 'SCRIPT_LOADED',
	SET_MAP: 'SET_MAP',
	setAddressList: (addressList, message) => ({
		type: mapActions.ADDRESS_LIST,
		addressList,
		message
	}),
	setMap: (map) => ({
		type: mapActions.SET_MAP,
		map
	}),
	loadedScript: (google) => ({
		type: mapActions.SCRIPT_LOADED,
		google,
	}),
	clearAddresses: () => ({
		type: mapActions.CLEAR_ADDRESS_LIST,
	})

};
export default mapActions;