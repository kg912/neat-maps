import React from 'react';
import { create } from 'react-test-renderer';
import { Login } from '../Login';


test("Login snapshot", () => {
	const c = create(<Login />);
	expect(c.toJSON()).toMatchSnapshot();
});

test("check loading state before submission", () => {
	const c = create(<Login />);
	const instance = c.getInstance();
	expect(instance.state.loading).toBeFalsy();
	expect(c.toJSON()).toMatchSnapshot();
});