export class Passenger {
	Firstname: string;
	Lastname: string;
	PassengerTypeCode: string;
	OrderId: string;
	RPH: string;
	GroupPNR: boolean;
}

export class OptionalFeeOptions {
	TicketDateOfIssue?: any;
	AccountCode?: any;
	TicketDesignator?: any;
	TourCode?: any;
}

export class RootObject {
	Passengers: Passenger[];
	OptionalFeeOptions: OptionalFeeOptions;
}
