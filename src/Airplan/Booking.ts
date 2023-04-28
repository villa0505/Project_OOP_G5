import { Bage } from "../Human/Bags";
import { Flight } from "./Flight";

export class Booking{
    price: number;
    flights: Flight[] = [];
    bags: Bage[] = [];
    constructor(price: number){
        this.price = price;
    }
    addflights(flights: Flight){
        this.flights.push(flights);
    }
    getflight(){
        return this.flights
    }
    addbage(bags: Bage){
        this.bags.push(bags);
    }
    getbag(){
        return this.bags
    }
}

