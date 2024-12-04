export class Value {
	ProgramID: string;
	ProgramName: string;
	Carrier: string;
	Alliance: string;
}

export class FqtvProgram {
	Key: string;
	Value: Value;
}

export class ReferenceInfo {
	FqtvPrograms: FqtvProgram[];
}

export class RootObject {
	ReferenceInfo: ReferenceInfo[];
}
