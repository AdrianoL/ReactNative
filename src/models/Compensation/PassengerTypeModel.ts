export class Value {
	Description: string;
	ListType: string;
}

export class PassengerTypeListTable {
	Key: string;
	Value: Value;
}

export class RootObject {
	PassengerTypeListTable: PassengerTypeListTable[];
}
