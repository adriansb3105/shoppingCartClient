import { Client } from "../model/Client.model";
import { Bill } from "./Bill.model";
import { Product } from "./Product.model";

export class OrderDetail{
    
    public orderDetailId: number;
    public quantity: number;
    public price: number;
    private tax: number;
    private deleted: boolean;
    private bill: Bill;
    public product : Product;
    

    constructor(quantity: number, price: number, tax: number, bill: Bill, product : Product){
        this.quantity = quantity;
        this.price = price;
        this.tax = tax;
        this.bill = bill;
        this.product = product;
    }  
}