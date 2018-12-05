import React from 'react';
import actions from '../actions';

const {
	LOGIN_REQUEST,
	LOGOUT,
} = actions;

describe('Auth Actions', () => {
	it(`should create a ${LOGIN_REQUEST} action`, () => {
		const email = 'xxx@xyz.com';
		const password = '12345';
		const message = () => <p>message mock component</p>;
		const expectedAction = {
			type: LOGIN_REQUEST,
			email,
			password,
			message
		};
		expect(actions.login(email, password, message)).toEqual(expectedAction);
	});

	it(`should create a ${LOGOUT} action`, () => {
		const expectedAction = {
			type: LOGOUT
		};
		expect(actions.logout()).toEqual(expectedAction);
	})
});