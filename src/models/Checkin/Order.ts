import { TravelerSecurityNumber } from '../apis.model';

export class ResponseData {
	ApisStatusList: any[];
	Errors?: any;
	Information?: any;
	Warnings?: any;
}

export class ResponseValidationStatus {
	Decisions: Decision[];
	Errors?: any;
	Information?: any;
	Warnings?: any;
}

export class Decision {
	DepartureAirport: string;
	ArrivalAirport: any;
	DecisionCode: any;
	DecisionMessage: any;
	Errors: any;
	Information: any;
	Warnings?: any;
}

export class Origin {
	City: string;
	Country: string;
	CountryCode: string;
	AirportCode: string;
	AirportFullName?: any;
}

export class FqtTraveler {
	IsRefValue: boolean;
	LoyalLevel?: any;
	LoyaltyLevelName?: any;
	MembershipID: string;
	ProgramID: string;
	AwardInformation?: any;
	MembershipNumber: string;
	VendorCodes: string;
	Operation?: any;
}

export class Destination {
	City: string;
	Country: string;
	CountryCode: string;
	AirportCode: string;
	AirportFullName?: any;
}

export class Status {
	StatusCode: string | undefined;
	StatusNumber?: string;
	ChangeStatusNumber?: any;
	StatusCategory: string | undefined;
	StatusDescription: string | undefined;
	Alert?: any;
	IsEligibleForConfirmedCheckIn?: any;
}

export class MarriageGrp {
	Text: string;
	Number: string;
	Value?: any;
}

export class FlightCheckIn {
	CheckInStatus: string;
}

export class FlightInfo {
	ScheduledDepartureTime?: any;
	ScheduledArrivalTime?: any;
	ScheduledArrivalDiffDays?: any;
	EstimatedOrActualDepartureType: string;
	EstimatedOrActualDepartureTime?: any;
	EstimatedOrActualDepartureDiffDays?: any;
	EstimatedOrActualArrivalType: string;
	EstimatedOrActualArrivalTime?: any;
	EstimatedOrActualArrivalDiffDays?: any;
	DepartureDelay?: any;
	ArrivalDelay?: any;
	FlightStatus: string;
	TimeAtLayover?: any;
	TimeToBoard?: any;
	DepartureTerminalGateLabel: string;
	DepartureTerminalGate?: any;
	ArrivalTerminalGateLabel: string;
	ArrivalTerminalGate?: any;
	AircraftTailNumberLabel: string;
	AircraftTailNumber?: any;
	Equipment?: any;
	DepartureCode?: any;
	ArrivalCode?: any;
	MarketingFlightList?: any;
}

export class Segment {
	RPH: string;
	RPHsave?: any;
	Origin: Origin;
	Destination: Destination;
	DepartureDateTime: Date;
	ArrivalDateTime: Date;
	MarketingFlight: string;
	OperatingFlight?: any;
	Status: Status;
	RBD: string;
	OriginRBD?: any;
	UpgradeRBD?: any;
	UpgradeType: number;
	Cabin?: any;
	PassengerRPHs: string[];
	NumberInParty: string;
	MarriageGrp: MarriageGrp;
	Info?: any;
	SelectedOnServiceTab: boolean;
	Comments?: any;
	Active: boolean;
	IsBooked: boolean;
	IsFirstSegment: boolean;
	Equipment?: any;
	IsWithinCheckInWindow: boolean;
	IsARNKOrOPENSegment: boolean;
	FlightCheckIn: FlightCheckIn;
	FlightInfo: FlightInfo[];
	Selected: boolean;
	Operation?: any;
	DepartureDay?: any;
	E_TicketEligibility?: any;
	IsThroughOrChangeOfGaugeFlight?: any;
	Connection?: any;
	Stopover?: any;
	Turnaround?: any;
	IsInternational: boolean;
	IsFlightRestricted: boolean;
}

export class PhoneNumber {
	IsRefValue: boolean;
	Type: string;
	TypeText: string;
	TechType: string;
	TechTypeText: string;
	Value: string;
	Operation?: any;
	OSIText?: any;
	CarrierCode?: any;
	Remark: string;
	LocationCode?: any;
	AreaCityCode: string;
}

export class ApisRequirement {
	DocLevelInd: string;
	AgencyName: string;
	RequiredCodeList: ['0', '1', '3', '4', '6', '7', '9', '10', '11'];
	DocType: string;
	DocTypeText: string;
	DocLevel: string;
}
export class ApisAddressRequirements {
	AgencyName: string;
	Type: string;
}

export class Address {
	IsRefValue: boolean;
	Type: string;
	TypeText: string;
	CityCode?: any;
	Address?: any;
	PostalCode?: any;
	City?: any;
	State?: any;
	CarrierCode?: any;
	Operation: string;
	OSIText?: any;
	AgencyName: string;
	DocLevelInd: string;
	AddressLineRequired: boolean;
	AddressCityRequired?: any;
	AddressStateProvRequired?: any;
	AddressPostalCodeRequired?: any;
	AddressCountryNameRequired?: any;
	AddressCountryCodeRequired?: any;
	AddressRequired?: any;
	CountryCode: string;
	Country: string;
}

export class Passenger {
	Firstname: string;
	Lastname: string;
	Prefix?: any;
	RPH: string;
	SurnameRefNumber: string;
	SurnameCount: number;
	PassengerTypeCode: string;
	PassengerTypeCodeDesc: string;
	CheckinPassengerType?: any;
	GroupCode?: any;
	GroupedGivenName?: any;
	GivenNameRefNumber: string;
	allowAddPassenger: boolean;
	Fullname: string;
	Selected: boolean;
	AddressDataExists: boolean;
	Addresses: Address[];
	PhoneNumbers: PhoneNumber[];
	TravelerSecurityNumbers: TravelerSecurityNumber[];
	OtherAddress: any[];
	Emails: any[];
	SSRDetails?: any;
	PrimaryTickets: any[];
	DateOfBirth: Date;
	Age: string;
	AssociatedAdultRPH?: any;
	AssociatedInfantRPH?: any;
	ApisDocoStatus: string;
	AdcDecisionStatus: string;
	Documents: any[];
	TSTs?: any;
	EMDs?: any;
	FqtTravelers: any[];
	SSRs: any[];
	EmergencyDetails: any[];
	Nationality?: any;
	ExitDate: any;
	ExitDateJustification: any;
	AllowToAddAddress: boolean;
	AgencyForPassenger?: any;
	ApisRequirements: ApisRequirement[];
	ApisAddressRequirements: ApisAddressRequirements[];
	ResidentCardRequired: boolean;
	Operation?: any;
	IsPaxNameHistory: boolean;
	IsPaxTelephoneHistory: boolean;
	IsPaxLoyaltyHistory: boolean;
	CheckInBagCountTotal?: any;
	CheckInBagWeightTotal?: any;
	CheckInAirportCode?: any;
	BaggageInfoToDelete?: any;
	KnownTravelerNumber: string;
	RedressNumber: string;
	OldDateOfBirth: Date;
	OldEmails: any[];
	OldEmergencyDetails: any[];
	OldKnownTravelerNumber: string;
	OldPhoneNumbers: PhoneNumber[];
	OldRedressNumber: string;
	Errors?: any;
	Information?: any;
	Warnings?: any;
	SurnameRefNumberCount: number;
	ShortCheckinArrivalCodesByFlights: any;
}
export class FqtTravelers {
	IsRefValue: boolean;
	LoyalLevel: string;
	MembershipID: string;
	ProgramID: string;
	LoyaltyLevelName: string;
	AwardInformation: string;
	VendorCodes: string;
	Operation: string;
	AllianceTierLevelName: string;
}

export class Status2 {
	StatusCode: string;
	StatusNumber: string;
	ChangeStatusNumber?: any;
	StatusCategory?: any;
	StatusDescription: string;
	Alert?: any;
}

export class Airline {
	Code: string;
	Value?: any;
}

export class OrderRelatedInfo {
	IsRefValue: boolean;
	PassengerRPH?: any;
	Category: string;
	Code: string;
	Description: string;
	AutocompleteText?: any;
	AutocompleteValue?: any;
	Comment: string;
	Status: Status2;
	Quantity: number;
	SegmentRPH?: any;
	Text?: any;
	Airline: Airline;
	Selected: boolean;
	CurrencyCode?: any;
	Amount?: any;
	FlightNumber?: any;
	FreeTextPermission: string;
	FreeTextValidation: string;
	Precondition?: any;
	SampleText: string;
	OldText?: any;
	IsUpdated: boolean;
	IsNonSegmentRelatedService: boolean;
	ReasonForIssuanceCode?: any;
	Operation?: any;
	Seat?: any;
	SeatPreference?: any;
	SeatNumber?: any;
	AirportService: boolean;
	HoverText?: any;
	IsSeatRequestHistory?: boolean;
	IsSSRHistory?: boolean;
	IsOSIHistory?: boolean;
}

export class Status3 {
	StatusCode: string;
	StatusNumber: string;
	ChangeStatusNumber?: any;
	StatusCategory?: any;
	StatusDescription: string;
	Alert: boolean;
}

export class Airline2 {
	Code: string;
	Value?: any;
}

export class Service {
	IsRefValue: boolean;
	PassengerRPH: string;
	Category: string;
	Code: string;
	Description: string;
	AutocompleteText?: any;
	AutocompleteValue?: any;
	Comment?: any;
	Status: Status3;
	Quantity: number;
	SegmentRPH: string;
	Text: string;
	Airline: Airline2;
	Selected: boolean;
	CurrencyCode: string;
	Amount?: any;
	FlightNumber: string;
	FreeTextPermission?: any;
	FreeTextValidation?: any;
	Precondition?: any;
	SampleText?: any;
	OldText?: any;
	IsUpdated: boolean;
	IsNonSegmentRelatedService: boolean;
	ReasonForIssuanceCode?: any;
	Operation?: any;
	Seat?: any;
	SeatPreference?: any;
	SeatNumber: string;
	AirportService: boolean;
	HoverText?: any;
	IsSeatRequestHistory?: any;
	IsSSRHistory?: any;
	IsOSIHistory?: any;
}

export class Airline3 {
	Code: string;
	Value?: any;
}

export class AssociatedService {
	IsRefValue: boolean;
	PassengerRPH: string;
	Category: string;
	Code: string;
	Description: string;
	AutocompleteText?: any;
	AutocompleteValue?: any;
	Comment?: any;
	Status?: any;
	Quantity: number;
	SegmentRPH: string;
	Text?: any;
	Airline: Airline3;
	Selected: boolean;
	CurrencyCode?: any;
	Amount?: any;
	FlightNumber?: any;
	FreeTextPermission?: any;
	FreeTextValidation?: any;
	Precondition?: any;
	SampleText?: any;
	OldText?: any;
	IsUpdated: boolean;
	IsNonSegmentRelatedService: boolean;
	ReasonForIssuanceCode?: any;
	Operation?: any;
	Seat?: any;
	SeatPreference?: any;
	SeatNumber: string;
	AirportService: boolean;
	HoverText?: any;
	IsSeatRequestHistory?: any;
	IsSSRHistory?: any;
	IsOSIHistory?: any;
}

export class Seat {
	SeatNumber: string;
	Cabin: string;
	Status: Status;
	Characteristics?: any;
	IsAssigned: boolean;
	SegmentRPH: string;
	PassengerRPH: string;
	FlightLegDepartureAirportCode?: any;
	AssociatedService?: any;
	DepartureCode: string;
	ArrivalCode: string;
	CheckinStatus: string;
	CheckinStatusDescription: string;
	BoardingPriority?: any;
	Timestamp?: any;
	IsChargable: boolean;
	IsPaid: boolean;
	HasPrice?: any;
}

export class BaggageInfo {
	CheckedBagCountTotal?: any;
	HandBagCountTotal?: any;
	UnitOfMeasureQuantity: number;
	UnitOfMeasureCode?: any;
	BaggageDetails?: any;
	BagNumberToDelete?: any;
	BagWeightToDelete?: any;
	SegmentRPH?: any;
	CheckedBagWeightTotal?: any;
	BagTagDetails?: any;
}

export class SegmentTravelerInfo {
	GivenName?: any;
	LastName?: any;
	PassengerRPH: string;
	SegmentRPH: string;
	Services: Service[];
	PaidServices?: any;
	Seats: Seat[];
	CheckinInfos?: CheckinInfo[];
	CheckinPassengerTypeCode: any;
	CheckinPassengerTypeCodeDesc: any;
	BaggageInfo: BaggageInfo;
	TicketNumbers: string[];
	ShortPassDesc: string;
	PassengerFullName?: any;
	Selected: boolean;
	SecurityCode?: any;
	SecurityCodeDesc?: any;
	PassengerRefNumber: string;
}

export class CheckinInfo {
	Status: string;
	StatusDescription: string;
	SequenceNumber?: any;
	PassengerRefNumber: string;
	Timestamp: Date;
	BoardingPriority: string;
	IsOnStandByList: boolean;
	ResBookDesigCode: string;
	UpgradeResBookDesigCode?: any;
	OriginalResBookDesigCode?: any;
	AlternateFlightNumber?: any;
	BookedOnAlternateFlight?: any;
	RebookedToAlternateFlight?: any;
	PassengerMessages?: any;
	PassengerAdditionalInfo: PassengerAdditionalInfo;
}
export class PassengerAdditionalInfo {
	IsDiplomatOrLEO: boolean;
	IsArmedPassenger: boolean;
	IsDisabled: boolean;
	IsInCapacitated: boolean;
	IsMilitary: boolean;
	IsOnOxygen: boolean;
	IsPrisonerGuard: boolean;
	IsUnaccompaniedMinor: boolean;
	IsEticketed: boolean;
	IsFlightDeckJumpSeatIndicator: boolean;
	IsCabinJumpSeatIndicator: boolean;
}
export class Remark {
	IsRefValue: boolean;
	Type: string;
	TypeText: string;
	ID: number;
	Number: number;
	Text: string;
	RPH: string;
	Operation?: any;
}

export class ConfidentialRemark {
	IsRefValue: boolean;
	Type?: any;
	TypeText?: any;
	ID: number;
	Number: number;
	Text?: any;
	RPH?: any;
	Operation?: any;
}

export class AgencyRemark {
	IsRefValue: boolean;
	Type?: any;
	TypeText?: any;
	ID: number;
	Number: number;
	Text?: any;
	RPH?: any;
	Operation?: any;
}

export class Status4 {
	StatusCode?: any;
	StatusNumber?: any;
	ChangeStatusNumber?: any;
	StatusCategory?: any;
	StatusDescription?: any;
	Alert?: any;
}

export class TimeLimit {
	CityCode: string;
	AirlineCode: string;
	QueueNumber?: any;
	AlertDate: Date;
	AlertTime: Date;
	AlertText?: any;
	Operation?: any;
	IsTmpData: boolean;
	Status: Status4;
}

export class RootObject {
	ID: string;
	Segments: Segment[];
	OrderHistory?: any;
	TravelerData?: any;
	FareQuoteHistory?: any;
	OrderFQTVStatus?: any;
	ModifiedDateOnly?: any;
	ModifiedTime?: any;
	Passengers: Passenger[];
	OrderRelatedInfos: OrderRelatedInfo[];
	SegmentTravelerInfos: SegmentTravelerInfo[];
	Remarks: Remark[];
	ConfidentialRemarks: ConfidentialRemark[];
	AgencyRemarks: AgencyRemark[];
	Split?: any;
	TimeLimits: TimeLimit[];
	Claim?: any;
	SearchOrderResult?: any;
	SearchType?: any;
	IsStandaloneTicket?: any;
	IsStandaloneEmd?: any;
	AdditionalTickets?: any;
	IsOutOfSyncTicket?: any;
	AdditionalTSTs?: any;
	ReceivedFrom?: any;
	OrderSource?: any;
	PricingInformation?: any;
	IsSSRHistoryIncluded?: any;
	IsSeatRequestHistoryIncluded?: any;
	IsOSIHistoryIncluded?: any;
	IsPaxNameHistoryIncluded?: any;
	IsPaxTelephoneHistoryIncluded?: any;
	IsPaxLoyaltyHistoryIncluded?: any;
	IsSeatmapRequestedFromInputWindow?: any;
	Warnings?: any;
}

/* Flight Models */

export class PassengerFlightInfo {
	IsInternational: boolean;
	BoardingInitiated: boolean;
	StandbyClearanceInitiated: boolean;
	DepartureTime: Date;
	DestinationAirport: string;
	IsUTC: boolean;
	OperatingFlightNumber?: any;
	FlightNumber: string;
	BookingClass?: any;
	NewFlightNumber?: any;
	DepartureDate: Date;
	DepartureAirport: string;
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

export class PassengerList {
	OrderId: string;
	PassengerType?: any;
	PassengerRPH: string;
	FlightRPH?: any;
	SeatList?: any;
	SequenceNumber?: any;
	PassengerRefNumber: string;
	CheckinDateTime?: any;
	Status: string;
	GivenName: string;
	Surname: string;
	AlternateFlightNumber?: any;
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
	SecurityCode?: any;
	CheckedBagCount: number;
	BagTags?: any;
	PassengerCharacteristics: string[];
	INFGivenName?: any;
	INFSurname?: any;
	INFDOB?: any;
	PassengerMessages?: any;
	SpecialServiceRequest: SpecialServiceRequest[];
	AssociatedAdultRPH: string;
	FqtTravelers: any[];
	InfantIndicator: string;
	Oversold: boolean;
	SyncTicket: boolean;
	OnStandby: boolean;
}

export class PassengerDetailList {
	FlightInfo: PassengerFlightInfo;
	GroupedPassengerList?: any;
	PassengerList: PassengerList[];
	Errors?: any;
	Information?: any;
	Warnings?: any;
}

/* Checkin Models */

export class CheckInOptions {
	UnaccompaniedMinor: boolean;
	DisabledPassenger: boolean;
	PreferredPassenger: boolean;
	StandbyUpgrade: boolean;
	Standby: boolean;
	ExtraSeat: boolean;
	NonRevenueCategory?: any;
}

export class FrequentFlyerProgram {
	ProgramIDxx?: any;
	MembershipID?: any;
}

export class CheckinPassengerList {
	OrderID: string;
	PassengerRefNumber: string;
	Firstname: string;
	Surname: string;
	Lastname: string;
	RPH: string;
	SurnameRefNumber: string;
	PassengerTypeCode: string;
	Selected: boolean;
	CheckInOptions: CheckInOptions;
	FrequentFlyerProgram: FrequentFlyerProgram;
}

export class SegmentList {
	RPH: string;
	DepartureDateTime: Date;
	ArrivalDateTime: Date;
	MarketingFlight: string;
	DepartureCity: string;
	Seats: Seat[];
	StatusCategory: string;
	RBD: string;
	PassengerRPHs: string[];
	SegmentRPH: string;
	FlightCheckIn: FlightCheckIn;
	FlightInfo?: any;
	Selected: boolean;
	IsThroughOrChangeOfGaugeFlight: boolean;
}

export class CheckinObject {
	CheckInType: string;
	PassengerList: CheckinPassengerList[];
	SegmentList: SegmentList[];
}
