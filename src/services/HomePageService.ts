import axios from 'axios';
import { API_ROUTES } from '../config/appConstants';
import { handleErrors } from '../utils/AppExecutionTime';

class HomePageService {
	private headerApiuser: string;
	private headerCurrency: string;
	private salesOffice: string;

	public async getCityService(): Promise<any> {
		const headers = {
			ApiUser: this.headerApiuser,
		};

		try {
			const response = await axios.get(`${API_ROUTES.HOST_PRINTER}locations`, {
				headers,
			});
			return response.data;
		} catch (error) {
			handleErrors(error);
		}
	}

	public async getAccountProfile(
		salesOffice: string = '',
		currency: string = '',
	): Promise<any> {
		const headers = {
			ApiUser: this.headerApiuser,
			http_currency: currency || this.headerCurrency,
			http_salesoffice: salesOffice || this.salesOffice,
		};

		try {
			const response = await axios.get(API_ROUTES.PROFILE, { headers });
			return response.data;
		} catch (error) {
			handleErrors(error);
		}
	}

	// Sugerencias y Modificaciones:
	// - Centraliza los headers si es posible.
	// - Manejo de errores consistente.
}

export default HomePageService;
