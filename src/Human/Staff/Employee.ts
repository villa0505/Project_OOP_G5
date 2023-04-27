import { Person } from "./Person";

class Employee extends Person{
    position: string;
    salary: number;
    constructor(firstName: string, lastName: string, phonenumber: number, age: number, gender: string, position: string, salary: number){
        super(firstName, lastName, phonenumber, age, gender);
        this.position = position;
        this.salary = salary;
    }
}