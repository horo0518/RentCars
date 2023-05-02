import { Color } from "./Color";
import { Rental } from "./Rental";

 export interface Car{
     id: number;
     licensePlate:number;
     company: String;
     model:String ;
     seats:number;
     dayPrice: number;
     status: Boolean ;
     color: Color;
     src: string;
     //rentalList:Array<Rental>;//לכל רכב יש הסטורית הזמנות
    }