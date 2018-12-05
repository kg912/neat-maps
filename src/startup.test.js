import startup from './startup';

const mockStore = {
	dispatch: jest.fn(action => action)
};

describe('test startup script', () => {
	test('test to see if startup script runs', () => {
		window.startup = startup;
		const mockStartup = jest.spyOn(window, 'startup');
		mockStartup(mockStore);
		expect(mockStartup).toHaveBeenCalled();
	});
});