import * as Checkin from './Checkin/index';
import * as Compensation from './Compensation/index';
import * as AccountProfile from './AccountProfile';
import * as ApisModel from './apis.model';
import * as SecurityModel from './apis.model';
import * as APISValidation from './apis.model';
import * as flightinfo from './flightinfo.model';
import * as FlightServiceInfo from './FlightServiceInfo';
import * as ToastMessages from './message.model';
import * as Passenger from './passenger.model';
import * as payment from './PaymentData';
import * as print from './PrintModel';
import * as Search from './search.model';

// import * as Search from './search.model';
// import * as SecurityModel from './apis.model';
// import * as APISValidation from './apis.model';
// import * as Passenger from './passenger.model';
// import * as flightinfo from './flightinfo.model';
// import * as FlightServiceInfo from './FlightServiceInfo';
// import * as model from './Checkin/Checkin';
// import * as payment from './PaymentData';
// import * as print from './PrintModel';
// import * as compansation from './Compensation/Compensation';
// import * as PassengerTypeListTable from './Compensation/PassengerTypeModel';
// import * as CompensationPassengerList from './Compensation/PassengerTypeModel';
// import * as CompensationOrderList from './Compensation/CompensationPaxList';
// import * as BRECompensation from './Compensation/BRECompensation';
// import * as ToastMessages from './message.model';

export const APP_MODEL: any[] = [
	Search,
	SecurityModel,
	Passenger,
	flightinfo,
	FlightServiceInfo,
	Checkin,
	payment,
	print,
	Compensation,
	APISValidation,
	ToastMessages,
];

// export * from './search.model';
// export * from './apis.model';
// export * from './FlightServiceInfo';
// export * from './flightinfo.model';
// export * from './checkin.model';
// export * from './payment.model';
// export * from './printer.model';
// export * from './compansation.model';
// export * from './passenger.model';
// export * from './message.model';

// Checkin.SecurityValidation.Document;
// Compensation.BRECompensation.Passenger;
