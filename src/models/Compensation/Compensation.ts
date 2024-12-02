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
	OptionalFlightNumber?: any;
	SegmentRPH?: any;
	BookingClass?: any;
	FlightNumber: string;
	DepartureDate: Date;
	DepartureAirport: string;
}

export class SeatList {
	SeatAvailability?: any;
	SeatNumber: string;
	SeatCharacteristics?: any;
	DepartureCode: string;
	ArrivalCode: string;
	Cabin: string;
	IsThruSeatNeeded: boolean;
}

export class InboundConnectingFlight {
	DepartureDateTime?: any;
	FlightNumber: string;
	LocationCode: string;
}

export class OutboundConnectingFlight {
	DepartureDateTime?: any;
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

export class AllianceTierLevel {
	Name: string;
	Code: string;
	Number?: any;
}

export class FqtTraveler {
	IsStarAlliance: boolean;
	IsRefValue: boolean;
	MembershipID: string;
	ProgramID: string;
	AwardInformation?: any;
	VendorCodes?: any;
	Operation?: any;
	LoyaltyProgramCode?: any;
	MilesBalance?: any;
	AllianceTierLevel: AllianceTierLevel;
	TierLevel?: any;
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
	Orgin: string;
	BoardingPriority?: any;
	SeatNumber?: any;
	ResBookDesigCode: string;
	UpgradeResBookDesigCode?: any;
	InfwithSeat?: any;
	InfantIndicator?: any;
	IsWaitList: boolean;
	InboundConnectingFlight: InboundConnectingFlight;
	OutboundConnectingFlight: OutboundConnectingFlight;
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
	FqtTravelers: FqtTraveler[];
	OldFlightSeatingInformation?: any;
	OtherServiceInfo: OtherServiceInfo[];
}

export class Compansation {
	FlightInfo: FlightInfo;
	GroupedPassengerList?: any;
	PassengerList: PassengerList[];
}

export class PassengerTypeListTable {
	Key: string;
	Value: Value;
}

export class Value {
	Description: string;
	ListType: string;
}
