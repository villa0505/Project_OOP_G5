export abstract class Person{
    firstName: string;
    lastName: string;
    phonenumber: number;
    age: number;
    gender: string;
    constructor(firstName: string, lastName: string, phonenumber: number, age: number, gender: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phonenumber = phonenumber;
        this.age = age;
        this.gender = gender;
    }
}