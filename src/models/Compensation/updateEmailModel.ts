export class RootObject {
	ReturnOrder: boolean;
	ReceivedFrom?: null;
	Changes?: string[] | null;
	Traveler: Traveler;
}
export class Traveler {
	Firstname: string;
	Lastname: string;
	SurnameRefNumber: string;
	Prefix?: null;
	RPH: string;
	Gender: string;
	PassengerTypeCode: string;
	AssociatedInfantRPH?: null;
	DateOfBirth: string;
	Age?: null;
	AssociatedAdultRPH?: null;
	FOID?: null;
	OldPhoneNumbers?: null[] | null;
	OldFirstname: string;
	OldLastname: string;
	OldEmergencyDetails?: null[] | null;
	IsContactRefused: boolean;
	PhoneNumbers?: null[] | null;
	TravelerSecurityNumbers?: null[] | null;
	Emails?: EmailsEntity[] | null;
	EmergencyDetails?: null[] | null;
}
export class EmailsEntity {
	Value: string;
	Type: string;
}
