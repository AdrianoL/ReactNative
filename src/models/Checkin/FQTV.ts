export class OrderFQTVStatus {
	OrderID: string;
	PassengerName: string;
	Status: string;
	FlightNumber: string;
	RPH: string;
	Origin: string;
}

export class RootObject {
	ID?: any;
	Segments?: any;
	OrderHistory?: any;
	TravelerData?: any;
	FareQuoteHistory?: any;
	OrderFQTVStatus: OrderFQTVStatus[];
	ModifiedDateOnly?: any;
	ModifiedTime?: any;
	Passengers?: any;
	OrderRelatedInfos?: any;
	SegmentTravelerInfos?: any;
	Remarks?: any;
	ConfidentialRemarks?: any;
	AgencyRemarks?: any;
	Split?: any;
	TimeLimits?: any;
	Claim?: any;
	SearchOrderResult?: any;
	SearchType?: any;
	IsStandaloneTicket?: any;
	IsStandaloneEmd?: any;
	AdditionalTickets?: any;
	IsOutOfSyncTicket?: any;
	AdditionalTSTs?: any;
	ReceivedFrom?: any;
	OrderSource?: any;
	PricingInformation?: any;
	IsSSRHistoryIncluded?: any;
	IsSeatRequestHistoryIncluded?: any;
	IsOSIHistoryIncluded?: any;
	IsPaxNameHistoryIncluded?: any;
	IsPaxTelephoneHistoryIncluded?: any;
	IsPaxLoyaltyHistoryIncluded?: any;
	IsSeatmapRequestedFromInputWindow?: any;
	Errors?: any;
	Information?: any;
	Warnings?: any;
}
