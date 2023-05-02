import dayjs, { Dayjs } from "dayjs";
import { Moment } from "moment";
import { Car } from "./Car";
import { User } from "./User";

export interface Rental{
    idRental:String | undefined;
    rentalDay:String | undefined;
    returnDay:String | undefined;
    city:String | undefined;
    street: String | undefined;
    num:String | undefined;
    showHour:String | undefined;
    miniBar:String | undefined;
    car:Car | undefined;//לכל השכרה יש רכב
    user:User | undefined;//לכל השכרה יש שוכר עם פרטים...
    
    }
    