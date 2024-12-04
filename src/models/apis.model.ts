export class PhoneNumber {
	IsRefValue: boolean;
	Type: string;
	TypeText: string;
	Operation?: any;
	TechType: string;
	TechTypeText: string;
	Value: string;
	OSIText?: any;
	CarrierCode?: any;
	Remark: string;
	AreaCityCode: string;
	Country?: any;
	CountryAccessCode?: any;
}

export class DocumentType {
	public DocType: string = '';
	public DocTypeText: string = '';
	public DocLevel: string = '';
}

export class EmergencyPhone {
	IsRefValue: boolean;
	Type: string;
	TypeText?: any;
	Operation?: any;
	TechType?: any;
	TechTypeText?: any;
	Value: string;
	OSIText?: any;
	CarrierCode?: any;
	Remark?: any;
	AreaCityCode: string;
	Country: string;
	CountryAccessCode: string;
}

export class APISDocument {
	Firstname: string;
	Surname: string;
	DocLevelInd: string = '1';
	DocType: string = '2';
	DocTypeText: string = 'Passport';
	DocHolderGender: string;
	inputType: string;
	isPrimary: boolean = true;
	BirthDate: string;
	DocID: string;
	ExpireDate: string;
	IsTrustedData: boolean;
	CountryOfResidence: string;
	OCRString: string;
	DocHolderNationality: string;
	DocIssueCountry: string;
	Operation: string = 'ADD';
}

export class EmergencyDetail {
	EmergencyContactName: string = '';
	EmergencyPhone: EmergencyPhone = new EmergencyPhone();
	EmergencyRelationship: string = '';
}

export class OldEmergencyDetail {
	EmergencyPhone: EmergencyPhone;
	EmergencyRelationship: string;
	EmergencyContactName: string;
}

export class Country {
	CountryName: string;
	CountryCode: string;
	PhoneAccessCode: string;
}

export class Nationality {
	item: string = 'CountryCode';
	items: any[] = ['CountryCode', 'CountryName'];
	length: number = 2;
	isAlphaOnly: boolean = true;
	country: Country = new Country();
}

export class ResidenceCountry {
	item: string = 'CountryCode';
	items: any[] = ['CountryCode', 'CountryName'];
	length: number = 2;
	isAlphaOnly: boolean = true;
	country: Country = new Country();
}

export class Document {
	Firstname: string;
	Surname: string;
	DocLevelInd: string = '1';
	DocType: string = '2';
	DocTypeText: string = 'Passport';
	DocLevel: string = '';
	DocHolderGender: string;
	EffectiveDate: any;
	inputType: string;
	isPrimary: boolean = true;
	BirthDate: string;
	DocID: string;
	ExpireDate: string;
	IsRefValue: boolean = false;
	IsTrustedData: boolean = true;
	IsVerifiedData: boolean = false;
	CountryOfResidence: string;
	DocHolderNationality: string;
	DocIssueCountry: string;
	Operation: string = 'ADD';
	OCRString: string;
}

export class ApisRequirement {
	DocLevelInd: string;
	AgencyName: string;
	RequiredCodeList: ['0', '1', '3', '4', '6', '7', '9', '10', '11'];
	DocType: string;
	DocTypeText: string;
}

export class ApisAddressRequirements {
	AgencyName: string;
	Type: string;
}

export class ADCResponse {
	ADCResponse: string;
}

export class Address {
	public IsRefValue: boolean = false;
	public Type: string = '4';
	public TypeText: string = 'Destination';
	public Address?: any = null;
	public PostalCode?: any = null;
	public City?: any = null;
	public State?: any = null;
	public Operation: string = 'ADD';
	public AgencyName: string = '';
	public DocLevelInd: string = '1';
	public AddressLineRequired: boolean = true;
	public AddressCityRequired?: any = false;
	public AddressPostalCodeRequired?: any = null;
	public AddressCountryCodeRequired?: any = false;
	public AddressRequired?: any = true;
	public CountryCode: string = '';
	public Country: string = '';
}
