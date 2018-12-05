import React from 'react';
import actions from '../actions';

const {
	ADDRESS_LIST,
	SCRIPT_LOADED
} = actions;

describe('Map Actions', () => {
	it(`should create an ${ADDRESS_LIST} action`, () => {
		const addressList = {};
		const message = () => <p>message mock component</p>;
		const expectedAction = {
			type: ADDRESS_LIST,
			addressList,
			message
		};
		expect(actions.setAddressList(addressList, message)).toEqual(expectedAction);
	});

	it(`should create a ${SCRIPT_LOADED} action once the google maps JS api is loaded`, () => {
		const google = {};
		const expectedAction = {
			type: SCRIPT_LOADED,
			google
		};
		expect(actions.loadedScript(google)).toEqual(expectedAction);
	})
});