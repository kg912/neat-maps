import React from 'react';
import { create } from 'react-test-renderer';
import CSVReader from '../CSVReader';

test("CSVReader Snapshot", () => {
	const c = create(<CSVReader onCSVLoad={() => true} />);
	expect(c.toJSON()).toMatchSnapshot();
});