export class Emd {
	compensationCause: string;
	compensationType: string;
	emdEndorsable: boolean;
	emdExchangeable: boolean;
	emdRefundable: boolean;
	emdType: string;
	emdUsedAtIssuance: boolean;
	endorsementTextItems: string[];
	formOfPayment: string;
	productCode: string;
	subProductCode: string;
}

export class Compensation {
	amount: number;
	compensationType: string;
	lowerLimit: number;
	upperLimit: number;
}

export class Passenger {
	cabinClass: string;
	compensationCause: string;
	compensations: Compensation[];
	flightNumber: string;
	givenName: string;
	orderId: string;
	passengerType: string;
	surname: string;
	tierLevel: string;
	IsSelected: boolean;
	fullname: string;
	email: string;
	additionaldetails: string;
	monetary: number;
	hotel: number;
	meal: number;
	transportation: number;
	additionalDetailsTexts: string[];
}

export class BREResponse {
	type: string;
	emd: Emd[];
	passengers: Passenger[];
}
