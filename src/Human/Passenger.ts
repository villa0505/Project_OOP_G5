import { Person } from "./Staff/Person";

export class Passenger extends Person{
    pasportNumber: string;
    constructor(firstName: string, lastName: string, phonenumber: number, age: number, gender: string, pasportNumber:string){
        super(firstName, lastName, phonenumber, age, gender);
        this.pasportNumber = pasportNumber;
    }
}
