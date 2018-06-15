import { Client } from "../model/Client.model";

export class Bill{
    
    public billId: number;
    public billDate: String;
    public totalValue: number;
    private deleted: boolean;
    public client : Client;
    
    constructor(billId: number, billDate: String, totalValue: number, deleted: boolean, client : Client){
        this.billId = billId;
        this.billDate = billDate;
        this.totalValue = totalValue;
        this.deleted = deleted;
        this.client = client;
    }  
}