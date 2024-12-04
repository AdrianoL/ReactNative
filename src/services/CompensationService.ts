import axios from 'axios';
import { API_ROUTES, HEADER_API_USER } from '../config/appConstants';
import CheckinOrderService from './CheckinOrderService';
import { handleErrors } from '../utils/AppExecutionTime';

class CompensationService {
	private headers: any;
	private actionUrl: string;
	private headerApiuser: string;
	private salesOffice: string;
	private headerCurrency: string;

	constructor(private checkinOrderService: CheckinOrderService) {
		this.headerApiuser = HEADER_API_USER;
		this.headerCurrency = this.checkinOrderService.getCurrency();
		this.salesOffice = this.checkinOrderService.getUserPointofSale();

		this.headers = {
			ApiUser: this.headerApiuser,
			'Content-Type': 'application/json',
			http_currency: this.headerCurrency,
			http_salesoffice: this.salesOffice,
		};

		this.actionUrl = API_ROUTES.COMPENSATION;
	}

	public async getPassengerType(): Promise<any> {
		const url = `${this.actionUrl}reference/getcompensationpassengertype`;
		try {
			const response = await axios.get(url, { headers: this.headers });
			return response.data;
		} catch (error) {
			handleErrors(error);
		}
	}

	public async getCompensationPaxList(
		date: string,
		flight: string,
		location: string,
		paxtype: string,
	): Promise<any> {
		const flightnum = flight.substr(2); // Ajusta según sea necesario
		const url = `${this.actionUrl}compensation/${date}/CM/${flightnum}/${location}/${paxtype}`;
		try {
			const response = await axios.get(url, { headers: this.headers });
			return response.data;
		} catch (error) {
			handleErrors(error);
		}
	}

	// Implementar los demás métodos de manera similar...

	// Sugerencias y Modificaciones:
	// - Asegúrate de que los endpoints de la API sean correctos.
	// - Manejo de errores centralizado.
}

export default CompensationService;
