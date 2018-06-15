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
    

    constructor(orderDetailId: number, quantity: number, price: number, tax: number, deleted: boolean, bill: Bill, product : Product){
        this.orderDetailId = orderDetailId;
        this.quantity = quantity;
        this.price = price;
        this.tax = tax;
        this.deleted = deleted;
        this.bill = bill;
        this.product = product;
    }  
}