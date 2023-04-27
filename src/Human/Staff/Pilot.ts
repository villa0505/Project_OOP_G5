import { Person } from "./Person";  
export class Pilot extends Person {
   private salary : number;
   constructor(firstName: string, lastName: string, dateOfBirth: string, gender: string, phoneNumber:number, salary:number) {
    super(firstName, lastName, dateOfBirth, gender, phoneNumber)
    this.salary = salary;

}}