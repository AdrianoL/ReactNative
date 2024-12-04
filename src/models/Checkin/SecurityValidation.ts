import { TravelerSecurityNumber } from '../apis.model';

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
	Remark?: any;
	LocationCode?: any;
	AreaCityCode: string;
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
export class AssociatedPassenger {
	SurnameRefNumber: string;
	Firstname: string;
	Lastname: string;
	RPH: string;
}

export class Document {
	DocFeature: string;
	DocType: string;
	DocId: string;
	ExpireDate: string;
	MrzString: string;
}

export class RootObject {
	Firstname: string;
	Lastname: string;
	SurnameRefNumber: string;
	RPH: string;
	Emails: any[];
	PassengerTypeCode: string;
	PhoneNumbers: PhoneNumber[];
	TravelerSecurityNumbers: TravelerSecurityNumber[];
	DateOfBirth: Date;
	Age?: any;
	FqtTravelers: FqtTraveler[];
	EmergencyDetails: any[];
	OldEmergencyDetails: any[];
	documents: Document[];
}
