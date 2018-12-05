import React from 'react';
import { create } from 'react-test-renderer';
import { CustomSelect } from "./index";

const selectValues = {
		col0: 'SELECT',
		col1: 'SELECT',
		col2: 'SELECT',
		col3: 'SELECT',
		col4: 'SELECT',
};

const options =  [
	'address',
	'city',
	'state',
	'zipcode',
	'category'
];

test("CustomSelect Snapshot test", () => {
	const snapshot = create(<CustomSelect
		id="col1"
		disabled={false}
		initSelectValue={(value, id) => {}}
		selectValues={selectValues}
		options={options}
	/>);
	expect(snapshot.toJSON()).toMatchSnapshot();
});