import { Client } from "../model/Client.model";

export class Bill{
    
    public billId: number;
    public billDate: Date;
    public totalValue: number;
    private deleted: boolean;
    public client : Client;
    
    constructor(billDate: Date, totalValue: number, client : Client){
        this.billDate = billDate;
        this.totalValue = totalValue;
        this.client = client;
    }  
}