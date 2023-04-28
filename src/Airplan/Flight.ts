export class Flight{
    flightNumber: number;
    departureTime: string;
    arrivalTime: string;
    gate: string;

    constructor(flightNumber: number, departureTime: string, arrivalTime: string, gate: string){
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.gate = gate;
    }
}



