export class Legs {
	SequenceNumber: number;
	DepartureAirport: DepartureAirport;
	ArrivalAirport: ArrivalAirport;
	DepartureGate?: any;
	ArrivalGate?: any;
	DepartureDateTime: DepartureDateTime;
	ArrivalDateTime: ArrivalDateTime;
	UtcOffset: string;
	isActualDepartureDateExist: boolean;
	isEstimatedDepartureDateExist: boolean;
	isActualArrivalDateExist: boolean;
	isEstimatedArrivalDateExist: boolean;
	DepartureOperationText?: any;
	ArrivalOperationText?: any;
	AircraftType: string;
	Tail: string;
	DepartureDelay: string;
	ArrivalDelay: string;
	Status: string;
	isLegSelected: boolean;
}
export class DepartureAirport {
	AirportName: string;
	FlagStopInd?: any;
	CityName?: any;
	LocationCode: string;
	CountryName?: any;
	CountryCode?: any;
	PhoneAccessCode?: any;
	ISO3CountryCode?: any;
}

export class ArrivalAirport {
	AirportName: string;
	FlagStopInd: boolean;
	CityName?: any;
	LocationCode: string;
	CountryName?: any;
	CountryCode?: any;
	PhoneAccessCode?: any;
	ISO3CountryCode?: any;
}

export class DepartureDateTime {
	Scheduled: Date;
	Estimated: Date;
	Actual: Date;
}

export class ArrivalDateTime {
	Scheduled: Date;
	Estimated: Date;
	Actual: Date;
}
