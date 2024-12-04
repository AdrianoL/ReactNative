export class RootObject {
	OrderId?: null;
	Gateway: string;
	ListType: string;
	DocumentType: string;
	Source: string;
	Segments?: SegmentsEntity[] | null;
	Passengers?: Passenger[] | null;
}
export class SegmentsEntity {
	OperatingCarrierCode: string;
	OperatingCarrierNumber: string;
	Departure: DepartureOrArrival;
	Arrival: DepartureOrArrival;
}
export class DepartureOrArrival {
	CityName: string;
	Date: string;
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
	CustomerCareNumber: string;
	EticketNumber: string;
	WorldTraceNumber: string;
	DeliveryDetail: DeliveryDetail;
}

export class Coupon {
	CommercialName: string;
	CompensationType: string;
}
export class DeliveryDetail {
	Email: Email;
}
export class Email {
	To?: ToEntity[] | null;
}
export class ToEntity {
	ToAddr: string;
}
