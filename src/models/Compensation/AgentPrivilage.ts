export class Privilege {
	Name: string;
	Constraints?: any;
}

export class RootObject {
	Privileges: Privilege[];
}
