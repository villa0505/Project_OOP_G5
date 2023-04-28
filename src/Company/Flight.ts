export class Flight{
    private startDate: string;
    private endDate: string;
    private flightNumber: number;
    public gate: string;
    constructor(startDate: string, endDate: string, flightNumber: number, gate: string){
        this.startDate = startDate;
        this.endDate = endDate;
        this.flightNumber = flightNumber;
        this.gate = gate;
    }
}
