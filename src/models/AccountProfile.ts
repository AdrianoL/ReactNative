export class Link {
	URL: string;
	Description: string;
}

export class Privilege {
	Name: string;
	Constraints: string[];
}

export class RootObject {
	Username: string;
	FirstName: string;
	LastName: string;
	AgentDutyCode: string;
	AgentSine: string;
	AirportCode: string;
	PseudoCityCode: string;
	Requestor_ID: string;
	Requestor_Type: string;
	CarrierCode: string;
	LblIataCodeOnly: number;
	ERSP_UserID: string;
	Language: string;
	Links: Link[];
	Roles: string[];
	Privileges: Privilege[];
	EmailAddress: string;
	Currencies: string[];
}
