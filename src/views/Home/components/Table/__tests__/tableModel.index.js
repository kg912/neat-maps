import tableModel from '../tableModel';

describe('tableModel', () => {
	const input = [
		[
			"one-family dwelling",
			"CA",
			"Foster City",
			"94404",
			"2545, 777 Shell Blvd"
		],
		[
			"restricted density multiple dwelling",
			"CA",
			"Menlo Park",
			"94025",
			"2800 Sand Hill Road"
		],
		[
			"historic preservation overlay zone",
			"CA",
			"Foster City",
			"94404",
			"919 Edgewater Blvd"
		],
		[
			"limited manufacturing",
			"CA",
			"Belmont",
			"94002",
			"1309 Elmer St A"
		],
		[
			"restricted density multiple dwelling",
			"CA",
			"San Carlos",
			"94070",
			"1106 Alameda de las Pulgas"
		],
	];

	const result = [
		{
			"col0": "one-family dwelling",
			"col1": "CA",
			"col2": "Foster City",
			"col3": "94404",
			"col4": "2545, 777 Shell Blvd",
			"key": 0
		},
		{
			"col0": "restricted density multiple dwelling",
			"col1": "CA",
			"col2": "Menlo Park",
			"col3": "94025",
			"col4": "2800 Sand Hill Road",
			"key": 1
		},
		{
			"col0": "historic preservation overlay zone",
			"col1": "CA",
			"col2": "Foster City",
			"col3": "94404",
			"col4": "919 Edgewater Blvd",
			"key": 2
		},
		{
			"col0": "limited manufacturing",
			"col1": "CA",
			"col2": "Belmont",
			"col3": "94002",
			"col4": "1309 Elmer St A",
			"key": 3
		},
		{
			"col0": "restricted density multiple dwelling",
			"col1": "CA",
			"col2": "San Carlos",
			"col3": "94070",
			"col4": "1106 Alameda de las Pulgas",
			"key": 4
		}
	];
	test('test outputs', () => {
		const output = tableModel(input);
		expect(output).toEqual(result);
	});
});
