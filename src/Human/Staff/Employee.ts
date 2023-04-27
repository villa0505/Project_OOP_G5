import { Person } from "./Person";
export class Employee extends Person{
    private position: string;
    constructor(firstName: string, lastName: string, dateOfBirth: string, gender: string, phoneNumber:number, position: string) {
        super(firstName, lastName, dateOfBirth, gender, phoneNumber)
        this.position;

}}