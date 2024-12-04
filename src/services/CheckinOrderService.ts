import { APISDocument, Order, CountryCollection } from '../models/CheckinModel';

class CheckinOrderService {
	private APISDocument: APISDocument | null = null;
	private CountryList: CountryCollection.Collection | null = null;
	private PassengerDetails: Order.RootObject | null = null;
	private APISDocumentDetails: any = null;
	private PassengerETicketDetails: Order.RootObject | null = null;
	private Ticket: any = null;
	private Inventory: any = null;
	private Inbound: any = null;
	private Outbound: any = null;
	private FQTV: any = null;
	private FlightStatus: any = null;
	private Baggagecatalog: any = null;
	private BagsToPrice: any = null;
	private StandardProducts: any[] = [];
	private CatalogProducts: any[] = [];
	private SegmentDetail: any = null;
	private PrinterInformation: any = null;
	private ProfileData: any = null;
	private DateFormat: string = 'Select Date Format';
	private LicenseKey: string =
		'GZR5RI67-FZ7NRGBU-OJBNPM4U-KGEKLXEV-RYNUCN2R-RCS5ZFMO-DNATP4ID-M246BEHY';
	private SelectedPassenger: any = null;
	private APISPassenger: any = null;
	private SecurityPassenger: any = null;
	private DocumentType: any = null;
	private DocumentTypeList: any[] = [];
	private ADCByPass: any = null;
	private ADCByPassList: any[] = [];
	private FlightDetails: any = null;
	private MultiSegmentPax: any = null;
	private FlightHeaderInfo: any = null;
	private CompensationList: any = null;
	private CompensationFlightInfo: any = null;
	private CompensationOrderList: any = null;
	private CompensationFQTVStatusList: any[] = [];
	private FlightHeaderInfoOrderId: any = null;
	private CompensationPaxList: any = null;
	private CompensationPassengerList: any = null;
	private BreCompPax: any = null;
	private ProfileArray: any = null;
	private Currency: any = null;
	private PointOfSale: any = null;
	private DeliveryDetails: any = null;
	private StartTime: any = null;
	private StartUpTable: any = null;
	private AdditionalDocuments: any = null;
	private AgentPrivilage: any = null;
	private AdtSecurityData: any = null;
	private CityList: any = null;
	private PassengerTypeList: any = null;
	private SegmentPax: any = null;
	private WorkStationDetails: any = null;
	private GetBagTags: any[] = [];
	private IsWaitListed: boolean = false;
	private AgentProfileList: any = null;
	private Seatmap: any = null;
	private DepartureArray: any = null;
	private curPrinter: any = null;

	// Métodos para establecer y obtener datos

	public setAPISDocument(apisDocument: APISDocument) {
		this.APISDocument = apisDocument;
	}

	public getAPISDocument(): APISDocument | null {
		return this.APISDocument;
	}

	public setCountry(country: CountryCollection.Collection) {
		this.CountryList = country;
	}

	public getCountry(): CountryCollection.Collection | null {
		return this.CountryList;
	}

	public setPassenger(passengerDetails: Order.RootObject) {
		this.PassengerDetails = passengerDetails;
	}

	public getPassenger(): Order.RootObject | null {
		return this.PassengerDetails;
	}

	public setIsWaitlisted(isWaitlist: boolean) {
		this.IsWaitListed = isWaitlist;
	}

	public getIsWaitlisted(): boolean {
		return this.IsWaitListed;
	}

	public setSecurityDocument(apisDocumentDetails: any) {
		this.APISDocumentDetails = apisDocumentDetails;
	}

	public getSecurityDocument(): any {
		return this.APISDocumentDetails;
	}

	public setSelectedPassenger(selectedPassenger: any) {
		this.SelectedPassenger = selectedPassenger;
	}

	public getSelectedPassenger(): any {
		return this.SelectedPassenger;
	}

	public setAPISPassengerList(apisPassenger: any) {
		this.APISPassenger = apisPassenger;
	}

	public getAPISPassengerList(): any {
		return this.APISPassenger;
	}

	// Continuar implementando los demás métodos de acuerdo al archivo original...

	// Sugerencias y Modificaciones:
	// - Eliminamos las dependencias de Angular y NativeScript.
	// - Usamos clases estándar de TypeScript.
	// - Si necesitas acceder a esta instancia globalmente, considera implementar un patrón singleton o usar Context API.
}

export default CheckinOrderService;
