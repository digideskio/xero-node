import { AccountingAPIClient } from '../AccountingAPIClient';
import { getPrivateConfig, setJestTimeout } from './helpers/integration.helpers';

describe('Invoices endpoint', () => {

	let xero: AccountingAPIClient;

	beforeAll(() => {
		setJestTimeout();
		const config = getPrivateConfig();
		xero = new AccountingAPIClient(config);
	});

	it('get single organisation', async () => {
		const response = await xero.organisation.get();

		expect(response.Organisations.length).toBe(1);
		expect(response.Organisations[0].Name).toBeTruthy();
	});
});
