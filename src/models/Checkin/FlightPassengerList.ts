export class Equipment {
	AirEquipType: string;
	AircraftTailNumber: string;
}

export class FlightInfo {
	IsInternational: boolean;
	BoardingInitiated: boolean;
	BoardingDateTime: Date;
	StandbyClearanceInitiated: boolean;
	Equipment: Equipment;
	DepartureTime: Date;
	DestinationAirport: string;
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
	BagTagOption?: any;
	DepartureDate: Date;
	DepartureAirport: string;
}

export class SeatList {
	SeatAvailability?: any;
	SeatNumber: string;
	SeatCharacteristics?: any;
	DepartureCode: string;
	Cabin: string;
	IsThruSeatNeeded: boolean;
}

export class InboundConnectingFlight {
	FlightNumber: string;
	LocationCode: string;
}

export class SpecialServiceRequest {
	Text: string;
	Airline?: any;
	Operation: number;
	SSRCode: string;
	ServiceQuantity: number;
	Status: string;
}

export class FqtTraveler {
	IsRefValue: boolean;
	LoyalLevel?: any;
	LoyaltyLevelName?: any;
	MembershipID: string;
	ProgramID: string;
	AwardInformation?: any;
	MembershipNumber?: any;
	VendorCodes?: any;
	Operation?: any;
}

export class OtherServiceInfo {
	Text: string;
	Airline?: any;
	Operation: number;
	SSRCode?: any;
	ServiceQuantity: number;
	Status?: any;
}

export class PassengerList {
	OrderId: string;
	PassengerType?: any;
	PassengerRPH: string;
	FlightRPH?: any;
	SeatList: SeatList[];
	SequenceNumber: string;
	PassengerRefNumber: string;
	CheckinDateTime?: Date;
	Status: string;
	GivenName: string;
	Surname: string;
	AlternateFlightNumber: string;
	Dest: string;
	BoardingPriority?: any;
	SeatNumber?: any;
	ResBookDesigCode: string;
	UpgradeResBookDesigCode?: any;
	InboundConnectingFlight: InboundConnectingFlight;
	OutboundConnectingFlight?: any;
	ServiceCombinedString: string;
	SSRs: string[];
	StandbyPassengerType: string;
	StandbyRank: number;
	IsStandbyForUpgrade: boolean;
	SecurityCode: string;
	CheckedBagCount: number;
	BagTags: string[];
	PassengerCharacteristics: string[];
	INFGivenName?: any;
	INFSurname?: any;
	INFDOB?: any;
	PassengerMessages?: any;
	SpecialServiceRequest: SpecialServiceRequest[];
	FqtTravelers: any[];
	OtherServiceInfo: OtherServiceInfo[];
	InfantIndicator: string;
	SyncTicket: boolean;
	OnStandby: boolean;
}

export class RootObject {
	FlightInfo: FlightInfo;
	GroupedPassengerList?: any;
	PassengerList: PassengerList[];
	Errors?: any;
	Information?: any;
	Warnings?: any;
}
