export class Origin {
	AirportName: string;
	CityName: string;
	LocationCode: string;
	CountryName: string;
	CountryCode: string;
}

export class Destination {
	AirportName: string;
	CityName: string;
	LocationCode: string;
	CountryName: string;
	CountryCode: string;
}

export class SeatProductInformation {
	SSRCode?: any;
	TypeOfService: string;
	SubCode: string;
	RFIC: string;
	EMD_TypeCode: string;
	OTACode: string;
	Description: string;
	ToolTip: string;
	SHARESCode: string;
	ProductName: string;
}
export class FlightSegment {
	RPH: number;
	DepartureDateTime: Date;
	ArrivalDateTime: Date;
	EquipmentType: string;
	Flight: string;
	OperatingFlight?: any;
	Origin: Origin;
	Destination: Destination;
	IsUTC: boolean;
	HasSurnamePrefix: boolean;
	HasStopover: boolean;
	ResBookDesigCode?: any;
	Status?: any;
	CouponInfo?: any;
	IsChangeOfGauge: boolean;
}

export class AirSeatList {
	SeatAvailability: string;
	SeatNumber: string;
	SeatCharacteristics: string[];
	ReconciledStatus: number;
	SeatPriceList?: any;
}

export class AirRowList {
	RowNumber: string;
	AirSeatList: AirSeatList[];
	RowCharacteristics: string[];
}

export class CabinList {
	CabinType: string;
	Name: string;
	AirRowList: AirRowList[];
}

export class RootObject {
	Items: Item[];

	Errors?: any;
	Information?: any;
	Warnings?: any;
}
export class Item {
	FlightSegment: FlightSegment;
	CabinList: CabinList[];
	SeatProductInformation: SeatProductInformation[];
	Errors?: any;
	Information?: any;
	Warnings?: any;
}
