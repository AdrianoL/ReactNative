export class AirportDeparture {
	ScheduledDepartureDate: Date;
	ScheduledArrivalDate: Date;
	ExpectedDepartureDate: Date;
	ExpectedArrivalDate: Date;
	DestinationAirport: string;
	Carrier: string;
	FlightNumber: string;
	CheckInStatus: string;
	Gate?: any;
	Destination: string;
	FlightStatus: string;
	configurations: Configuration[];
}

export class RootObject {
	AirportDepartures: AirportDeparture[];
	Errors?: any;
	Information?: any;
	Warnings?: any;
}
export class Configuration {
	CodeLetter: string;
	Capacity: string;
	Booked: string;
	BoardingTime: string;
}
