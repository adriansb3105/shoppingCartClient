import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { Product } from './model/Product.model';
import { Category } from './model/Category.model';
import { ShoppingCart } from "./model/ShoppingCart.model";
import { Bill } from "./model/Bill.model";
import { Client } from "./model/Client.model";
import { Employee } from "./model/Employee.model";

@Injectable()
export class LogicService {
  private url = 'http://localhost:8080/api/';
  private headers;
  private bill: Bill;
  private static client: Client;
  private static employee: Employee;
  private static loggedIn: boolean;

    constructor(private http: Http){
        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        this.headers.append('Access-Control-Allow-Methods', 'GET');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }

    loginClient(email:String, password: String){
        return this.http.post(this.url + 'clients/login/', {email, password}, { headers: this.headers})
        .pipe(map((response:any) => {
            return response;
        } ));
    }

    loginEmployee(employeeCode: String, email:String, password: String){
        return this.http.post(this.url + 'employees/login/', {employeeCode, email, password}, { headers: this.headers})
        .pipe(map((response:any) => {
            return response;
        } ));
    }
    
    productsByName(): Observable<Product[]> {
        return this.http.get(this.url + "products/", { headers: this.headers})
        .pipe(map(response => response.json()))
    }

    addToCart(shoppingCart: ShoppingCart): Observable<Product> {
        return this.http.post(this.url + 'shopping_carts/', shoppingCart, { headers: this.headers})
        .pipe(map(response => response.json()));
    }

    generatePurchase(product : Product, quantity : number){
        //this.client = new Client(1, "adrian@mail.com", "Adrian", "Serrano", "abc123", "Cartago", "30106", "88888888", "Al norte de la plaza", false);

        //this.bill = new Bill(1, "20180303", product.price * quantity, false, this.client);

        //this.bill = this.http.post(this.url + 'bills/', this.bill, { headers: this.headers})
        //.pipe(map(response => response.json()));
    }

    setClient(c: Client): void{
        LogicService.client = new Client(c.clientId, c.email, c.firstName, c.lastName, c.password, c.city, c.postalCode, c.telephone, c.description, c.deleted);
    }

    getClient(): Client{
        return LogicService.client;
    }

    setEmployee(e: Employee): void{
        LogicService.employee = new Employee(e.employeeId, e.email, e.firstName, e.lastName, e.password, e.employeeCode, e.departament, e.deleted);
    }

    getEmployee(): Employee{
        return LogicService.employee;
    }

    setLoggedIn(): void{
        LogicService.loggedIn = true;
    }

    isLoggedIn(): boolean{
        return LogicService.loggedIn;
    }

    logout(): void{
        LogicService.loggedIn = false;
        LogicService.client = null;
        LogicService.employee = null;
    }
}