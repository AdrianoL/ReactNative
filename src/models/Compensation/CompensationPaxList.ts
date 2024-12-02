export class SSR {
	FlightSegmentId: number;
	PassengerSeq: number;
	SsrCode: string;
}

export class Etkt {
	FlightSegmentId: number;
	PassengerSeq: number;
	TicketNbr: string;
	CpnNum: string;
}

export class ReaccomDetail {
	FlightSegmentId: number;
	PassengerSeq: number;
	ReacomSeq: number;
	FromToFlag: string;
	ReaccomAirlineCode: string;
	ReaccomFlightNo: string;
	ReaccomFlightDt: string;
	ReaccomBoardCityCd: string;
	ReaccomOffCityCd: string;
	UpdateLockNbr: number;
}

export class Bag {
	FlightSegmentId: number;
	PassengerSeq: number;
	BagtagNbr: string;
	UpdateLockNbr: number;
}

export class Emd {
	FlightSegmentId: number;
	PassengerSeq: number;
	CompSeq: string;
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
}

export class Compensation {
	FlightSegmentId: number;
	PassengerSeq: number;
	CompSeq: string;
	CompReasonId: string;
	CompReasonText: string;
	CompTypeId: string;
	CompTypeText: string;
	CompAmt: number;
	CompCurrencyCd: string;
	VoucherCnt: string;
	OverrideReason: string;
	UpdateLockNbr: number;
	Emds: Emd[];
}

export class Emd2 {
	FlightSegmentId: number;
	PassengerSeq: number;
	CompSeq: string;
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
}

export class ExistingCompensation {
	FlightSegmentId: number;
	PassengerSeq: number;
	CompSeq: string;
	CompReasonId: string;
	CompReasonText: string;
	CompTypeId: string;
	CompTypeText: string;
	CompAmt: number;
	CompCurrencyCd: string;
	VoucherCnt: string;
	OverrideReason: string;
	UpdateLockNbr: number;
	Emds: Emd2[];
}

export class Passenger {
	FlightSegmentId: number;
	PassengerSeq?: number;
	OrderId: string;
	SurnameNum?: number;
	FirstnameNum: string;
	PaxLastNm: string;
	PaxFirstNm: string;
	PaxType: string;
	FqtvCc?: any;
	FqtvNumber?: any;
	PaxStatus: string;
	PaxEmailAddress: string;
	IsExistingCompensation: boolean;
	UpdateLockNbr?: number;
	FqtvTier: string;
	CabinClass: string;
	IsCompensationIssued: boolean;
	SSR: SSR[];
	Etkt: Etkt[];
	ReaccomDetails: ReaccomDetail[];
	Bags: Bag[];
	Compensations: Compensation[];
	ExistingCompensations: ExistingCompensation[];
}

export class FlightSegment {
	FlightSegmentId: number;
	AirlineCode: string;
	FlightNo: string;
	DepartureDt: string;
	Departure: string;
	Arrival: string;
	Passengers: Passenger[];
}

export class RootObject {
	FlightSegments: FlightSegment[];
	Errors?: any;
}
