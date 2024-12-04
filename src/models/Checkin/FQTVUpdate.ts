export class FqtTraveler {
	MembershipID: string;
	IsRefValue: boolean;
	Operation: string;
	VendorCodes: string;
	ProgramID: string;
}

export class Traveler {
	Firstname: string;
	Lastname: string;
	Prefix?: any;
	PrefixText?: any;
	RPH: number;
	SurnameRefNumber: number;
	PassengerTypeCode: string;
	FqtTravelers: FqtTraveler[];
	DateOfBirth: Date;
	Age?: any;
	AssociatedInfantRPH: number;
}

export class RootObject {
	OrderId: string;
	Changes: string[];
	ReturnOrder: boolean;
	Traveler: Traveler;
}
