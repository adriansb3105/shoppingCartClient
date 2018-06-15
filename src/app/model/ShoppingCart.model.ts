import { Client } from './Client.model';
import { Product } from './Product.model';

export class ShoppingCart{
    public shoppingCartId: number;
    public quantity:number;
    public dateCreated:String;
    public deleted:boolean;
    public client:Client;
    public product:Product;

    constructor(shoppingCartId?:number, quantity?:number, dateCreated?:String,
                deleted?:boolean, client?:Client, product?:Product){
        this.shoppingCartId = shoppingCartId;
        this.quantity = quantity;
        this.dateCreated = dateCreated;
        this.deleted = deleted;
        this.client = client;
        this.product = product;
    }  
}