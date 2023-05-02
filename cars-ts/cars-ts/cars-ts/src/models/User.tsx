import { Rental } from "./Rental";

export interface User{
   
    id:number | undefined;
    tz: String | undefined;
    password: String | undefined;
    firstName: String | undefined;
    lastName: String | undefined;
    phoneNumber: String | undefined;
    mail: String | undefined ;
    status:number | undefined;
    //rentalList:Array<Rental>;// לכל משתמש יש לפחת השכרה אחת
    }
    