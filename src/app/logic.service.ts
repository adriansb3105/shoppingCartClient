import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { Product } from './model/Product.model';
import { Category } from './model/Category.model';
import { ShoppingCart } from "./model/ShoppingCart.model";
import { Bill } from "./model/Bill.model";
import { Client } from "./app.component";

@Injectable()
export class LogicService {
  private url = 'http://localhost:8080/api/';
  private headers;
  private bill: Bill;
  private client: Client;

    constructor(private http: Http){
        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        this.headers.append('Access-Control-Allow-Methods', 'GET');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }
    
    productsByName(): Observable<Product[]> {
        return this.http.get(this.url + "products/").pipe(map(response => response.json()))
    }

    addToCart(shoppingCart: ShoppingCart): Observable<Product> {
        return this.http.post(this.url + 'shopping_carts/', shoppingCart, { headers: this.headers})
        .pipe(map(response => response.json()));
    }

    generatePurchase(product : Product, quantity : number){
        this.client = new Client(1, "adrian@mail.com", "Adrian", "Serrano", "abc123", "Cartago", "30106", "88888888", "Al norte de la plaza", false);

        //this.bill = new Bill(1, "20180303", product.price * quantity, false, this.client);

        //this.bill = this.http.post(this.url + 'bills/', this.bill, { headers: this.headers})
        //.pipe(map(response => response.json()));


    }
}