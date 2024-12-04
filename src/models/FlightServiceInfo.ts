export class Parameters {
	DepartureTime: Date;
	DestinationAirport?: any;
	IsUTC: boolean;
	OperatingFlightNumber?: any;
	ConnectionFlightNumber?: any;
	FlightNumber: string;
	BookingClass?: any;
	NewFlightNumber?: any;
	EndPassengerSeqNumber?: any;
	GivenName?: any;
	Surname?: any;
	PassengerSeqNumber?: any;
	RPH?: any;
	Option?: any;
	DepartureDate: Date;
	DepartureAirport?: any;
}

export class Header {
	DepartureDate: Date;
	DepartureTime: Date;
	Flight: string;
	Origin?: any;
	Destination?: any;
	IsUTC: boolean;
	HasSurnamePrefix: boolean;
}

export class DepartureAirport {
	AirportName: string;
	CityName?: any;
	LocationCode: string;
	CountryName?: any;
	CountryCode?: any;
}

export class ArrivalAirport {
	AirportName: string;
	CityName?: any;
	LocationCode: string;
	CountryName?: any;
	CountryCode?: any;
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

export class Leg {
	SequenceNumber: number;
	DepartureAirport: DepartureAirport;
	ArrivalAirport: ArrivalAirport;
	DepartureGate?: any;
	ArrivalGate?: any;
	DepartureDateTime: DepartureDateTime;
	ArrivalDateTime: ArrivalDateTime;
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
}

export class Flight {
	Number: string;
	Date: Date;
	Legs: Leg[];
}

export class RootObject {
	Parameters: Parameters;
	Header: Header;
	Flights: Flight[];
	Items: any[];
	Errors?: any;
	Information?: any;
	Warnings?: any;
}
