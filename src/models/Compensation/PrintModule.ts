export class RootObject {
	OrderId?: null;
	Gateway: string;
	DocumentType: string;
	ListType: string;
	Source: string;
	Segments: Segment[];
	Passengers: Passenger[];
	DeliveryDetail: DeliveryDetail;
}
export class Segment {
	OperatingCarrierCode: string;
	OperatingCarrierNumber: string;
	Departure: Departure;
	Arrival: Arrival;
}
export class Departure {
	CityName: string;
}

export class Arrival {
	CityName: string;
}

export class Passenger {
	FlightSegmentId: string;
	PassengerSeq: string;
	OrderId: string;
	CompSeq: string;
	PrimaryDocumentNbr: string;
	PrimaryAirlineCd: string;
	IssueDt?: any;
	FirstNm: string;
	LastNm: string;
	ReasonForIssuanceSubCd: string;
	ReasonForIssuanceCd: string;
	PrintStatus?: any;
	EmailStatus?: any;
}

export class EMDEntity {
	EMDDocumentNumber: string;
	IssuingDate: string;
}
export class DeliveryDetail {
	Email?: null;
	Printer: Printer;
}
export class Printer {
	ClientCode: string;
	DeviceName: string;
	WorkstationName: string;
	OfficeName: string;
	DeviceType: string;
	PectabVersion: string;
}
