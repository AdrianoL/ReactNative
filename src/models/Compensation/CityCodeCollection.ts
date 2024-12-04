export class RootObject {
	Collection: CollectionEntity[];
	BoardingPassOutput?: null;
	BagTagOutput?: null;
	Success: boolean;
	Errors?: null;
	Information?: null;
	Warnings?: null;
}
export class CollectionEntity {
	Code: string;
	Name: string;
	Type: string;
}
