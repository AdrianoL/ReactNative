export class SelectedService {
	RFISC_code: string;
	RFISC_subCode: string;
	SSRCode?: any;
	commercialName: string;
	EmdType: string;
	TypeOfService?: any;
	emdEndorsable: string;
	emdRefundable: boolean;
	emdExchangeable: string;
	emdUsedAtIssuance: string;
	IsRefundable: string;
}
export class Services {
	Taxes?: any;
	passengerRPH: string;
	segmentRPH?: any;
	currencyCode: string;
	amount: string;
	ticketNumber?: any;
	Remarks?: any;
	Endorsement: string;
	selectedService: SelectedService;
}

export class Payments {
	Type: string;
	TransactionType: string;
	SubType: string;
	Description: string;
	Amount: string;
	CurrencyCode: string;
	AccountCode: string;
}

export class Emd {
	FlightSegmentId: string;
	PassengerSeq: string;
	CompSeq: string;
	PrimaryDocumentNbr?: any;
	PrimaryAirlineCd: string;
	IssueDt: string;
	FirstNm: string;
	LastNm: string;
	UserId: string;
	ReasonForIssuanceSubCd: string;
	OverrideReason: string;
	ReasonForIssuanceCd: string;
	Endorsements1Txt: string;
	RemarkTxt: string;
	CompAmt: any;
	CompCurrencyCd: any;
	VoucherCnt: any;
	PointOfSale: any;
}

export class Compensation {
	FlightSegmentId: string;
	PassengerSeq: string;
	CompSeq: string;
	CompReasonId: string;
	CompReasonText: string;
	CompTypeId: string;
	CompTypeText: string;
	UpdateLockNbr?: any;
	Remarks?: any;
	Endorsement: string;
	Services: Services;
	Payments: Payments;
	Emds: Emd[];
}

export class Passenger {
	FlightSegmentId: string;
	PassengerSeq: string;
	OrderId: string;
	PaxLastNm: string;
	PaxFirstNm: string;
	PaxType?: any;
	FqtvCc?: any;
	FqtvNumber?: any;
	PaxStatus?: any;
	PaxEmailAddress?: any;
	PaxCompReasonID: any;
	IsExistingCompensation: boolean;
	UpdateLockNbr?: any;
	FqtvTier?: any;
	CabinClass?: any;
	PaxRPH: string;
	DummyCompOrderFlag: string;
	WorldTracerNum: string;
	CustomerCareCaseNum: string;
	IsCompensationIssued?: any;
	SSR: any[];
	SSRs: SSRs[];
	Etkt: any[];
	ExistingCompensations: any[];
	ReaccomDetails: any[];
	Bags: any[];
	Compensations: Compensation[];
}
export class SSRs {
	FlightSegmentId: number;
	PassengerSeq: number;
	SsrCode: string;
}
export class FlightSegment {
	FlightSegmentId: number;
	AirlineCode: string;
	FlightNo: string;
	DepartureDt: string;
	Departure: string;
	Arrival: string;
	FlightSegmentRPH: string;
	DepartureDateTime: string;
	ArrivalDateTime: Date;
	HasStopover: boolean;
	Passengers: Passenger[];
}

export class RootObject {
	SourceId: any;
	UserId: any;
	AddOrderFlow: any;
	FlightSegments: FlightSegment[];
}
