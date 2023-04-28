import { Person } from "./Staff/Person";

export class Passenger extends Person{
    private pasportNumber: string;
    constructor(firstName: string, lastName: string, dateOfBirth: string, gender: string, phoneNumber:number, pasportNumber:string) {
        super(firstName, lastName, dateOfBirth, gender, phoneNumber)
        this.pasportNumber = pasportNumber;
    }
}
