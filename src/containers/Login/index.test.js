import React from 'react';
import { create } from 'react-test-renderer';
import { Login } from '../Login';

test("Login Snapshot", () => {
	const c = create(<Login />);
	expect(c.toJSON()).toMatchSnapshot();
});