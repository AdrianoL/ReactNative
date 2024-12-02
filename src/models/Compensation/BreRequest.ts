export class Passenger {
	FlightSegmentId: string;
	PassengerSeq?: any;
	OrderId: string;
	PaxLastNm: string;
	PaxFirstNm: string;
	Origin: string;
	Dest: string;
	PaxType?: any;
	PaxCompReasonId: string;
	FqtvCc?: any;
	FqtvNumber?: any;
	PaxStatus?: any;
	PaxEmailAddress?: any;
	UpdateLockNbr?: any;
	FqtvTier?: any;
	CabinClass: string;
	PaxRPH: string;
	CompReasonText: string;
	SSR: SSRs[];
	Etkt: any[];
	ReaccomDetails: any[];
	Bags: any[];
	Compensations: any[];
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
	FlightSegmentRPH?: any;
	Passengers: Passenger[];
}

export class RootObject {
	SourceId: string;
	privilege: string[];
	UserId: string;
	FlightSegments: FlightSegment[];
}
