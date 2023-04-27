export class Flight{
    date: string;
    time: string;
    flightNumber: number;
    gate: string;
    constructor(date: string, time: string, flightNumber: number, gate: string){
        this.date = date;
        this.time = time;
        this.flightNumber = flightNumber;
        this.gate = gate;
    }
}
