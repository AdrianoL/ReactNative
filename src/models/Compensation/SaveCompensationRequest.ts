export class SSR {
	FlightSegmentId?: any;
	PassengerSeq?: any;
	SsrCode: string;
}

export class Etkt {
	FlightSegmentId?: any;
	PassengerSeq?: any;
	TicketNbr: string;
	CpnNum: number;
}

export class ReaccomDetail {
	FlightSegmentId?: any;
	PassengerSeq?: any;
	ReacomSeq?: any;
	FromToFlag: string;
	GUIDisplayFlag: string;
	ReaccomAirlineCode: string;
	ReaccomFlightNo: string;
	ReaccomFlightDt: string;
	ReaccomBoardCityCd: string;
	ReaccomOffCityCd: string;
	UpdateLockNbr?: any;
}

export class Bag {
	FlightSegmentId?: any;
	PassengerSeq?: any;
	BagtagNbr: string;
	UpdateLockNbr?: any;
}

export class Emd {
	FlightSegmentId?: any;
	PassengerSeq?: any;
	CompSeq?: any;
	PrimaryDocumentNbr: string;
	PrimaryAirlineCd: string;
	IssueDt: string;
	FirstNm: string;
	LastNm: string;
	UserId: string;
	ReasonForIssuanceSubCd: string;
	ReasonForIssuanceCd: string;
	Endorsements1Txt: string;
	RemarkTxt: string;
	PrintStatus: string;
	EmailStatus: string;
}

export class Compensation {
	FlightSegmentId?: number;
	PassengerSeq?: number;
	CompSeq?: string;
	CompReasonId: number;
	CompTypeId?: string;
	CompAmt: number;
	CompCurrencyCd: string;
	VoucherCnt: string;
	OverrideReason: string;
	UpdateLockNbr?: number;
	CompReasonText: string;
	CompTypeText: string;
	Emds: Emd[];
}

export class Passenger {
	FlightSegmentId?: any;
	PassengerSeq?: any;
	OrderId: string;
	SurnameNum: number;
	FirstnameNum: number;
	PaxLastNm: string;
	PaxFirstNm: string;
	PaxType: string;
	FqtvCc: string;
	FqtvNumber: string;
	PaxCompReasonID: string;
	PaxCompReasonText: string;
	IsExistingCompensation: boolean;
	Origin: string;
	Dest: string;
	WorldTracerNum: string;
	CustomerCareCaseNum: string;
	PaxRPH: string;
	IsCompensationIssued: boolean;
	IsCompensationNotIssued: boolean;
	PaxStatus: string;
	PaxEmailAddress: string;
	UpdateLockNbr?: any;
	FqtvTier: string;
	CabinClass: string;
	SSR: SSR[];
	Etkt: Etkt[];
	ReaccomDetails: ReaccomDetail[];
	Bags: Bag[];
	Compensations: Compensation[];
}

export class FlightSegment {
	FlightSegmentId?: any;
	AirlineCode: string;
	FlightNo: string;
	DepartureDt: string;
	Departure: string;
	Arrival: string;
	Passengers: Passenger[];
}

export class RootObject {
	SourceId: string;
	UserId: string;
	FlightSegments: FlightSegment[];
}
