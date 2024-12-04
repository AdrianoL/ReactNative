// src/services/PassengerService.ts

import axios, { AxiosRequestConfig } from 'axios';
import { API_ROUTES, HEADER_API_USER } from '../config/appConstants';
import CheckinOrderService from './CheckinOrderService';
import { handleErrors } from '../utils/AppExecutionTime';

class PassengerService {
	private headerApiuser: string;
	private headerCurrency: string;
	private salesOffice: string;

	constructor(private checkinOrderService: CheckinOrderService) {
		this.headerApiuser = HEADER_API_USER;
		this.headerCurrency = this.checkinOrderService.getCurrency();
		this.salesOffice = this.checkinOrderService.getUserPointofSale();
	}

	public async getPassenger(
		orderID: string,
		boardingLocation: string = '',
	): Promise<any> {
		const headers = {
			ApiUser: this.headerApiuser,
			http_currency: this.headerCurrency,
			http_salesoffice: this.salesOffice,
		};

		const POSLocation = 'POS'; // Debes obtener este valor de manera adecuada
		let request =
			'?apis=true&ckin=true&ckinsrchwin=true&shrtck=true&tktdtl=true';

		if (boardingLocation.trim().length > 0) {
			request += `&brdloc=${boardingLocation}`;
		} else {
			request += `&brdloc=${POSLocation}`;
		}

		try {
			const response = await axios.get(
				`${API_ROUTES.GET_PASSENGER}/${orderID}${request}`,
				{ headers },
			);
			return response.data;
		} catch (error) {
			handleErrors(error);
		}
	}

	public async addPassenger(requestData: any, orderID: string): Promise<any> {
		const headers = {
			ApiUser: this.headerApiuser,
		};

		try {
			const response = await axios.post(
				`${API_ROUTES.ADD_PASSENGER}/${orderID}/apis`,
				requestData,
				{ headers },
			);
			return response.data;
		} catch (error) {
			handleErrors(error);
		}
	}

	public async getRequiredDocuments(orderID: string): Promise<any> {
		const headers = {
			ApiUser: this.headerApiuser,
			http_currency: this.headerCurrency,
			http_salesoffice: this.salesOffice,
		};

		try {
			const response = await axios.get(
				`${API_ROUTES.GET_REQUIRED_DOCS}/${orderID}/apis/documents`,
				{ headers },
			);
			return response.data;
		} catch (error) {
			handleErrors(error);
		}
	}

	// Implementar los demás métodos de manera similar...

	// Sugerencias y Modificaciones:
	// - Usamos `axios` para las llamadas HTTP.
	// - Manejo de errores centralizado con `handleErrors`.
	// - Usamos `async/await` para operaciones asíncronas.
}

export default PassengerService;
