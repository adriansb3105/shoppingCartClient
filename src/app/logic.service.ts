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
import { ProductImage } from "./model/ProductImage.model";

@Injectable()
export class LogicService {
  private url = 'http://localhost:8080/api/';
  private headers;
  private bill: Bill;
  private employee: Employee;
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

    generateClient(client: Client): Observable<Client>{
        return this.http.post(this.url + 'clients/', client, { headers: this.headers})
        .pipe(map((response:any) => {
            return response;
        } ));
    }
    
    productById(id): Observable<Product> {
        return this.http.get(this.url + "products/" + id, { headers: this.headers})
        .pipe(map(response => response.json()))
    }

    productsByName(): Observable<Product[]> {
        return this.http.get(this.url + "products/", { headers: this.headers})
        .pipe(map(response => response.json()))
    }

    addToCart(shoppingCart: ShoppingCart): Observable<Product> {
        return this.http.post(this.url + 'shopping_carts/', shoppingCart, { headers: this.headers})
        .pipe(map(response => response.json()));
    }

    getShoppingCarts(): Observable<ShoppingCart[]>{
        return this.http.get(this.url + "shopping_carts/", { headers: this.headers})
        .pipe(map(response => response.json()))
    }

    generateBill(bill: Bill): Observable<Bill>{
        return this.http.post(this.url + 'bills/', bill, { headers: this.headers})
        .pipe(map(response => response.json()));
    }

    generateOrderDetail(orderDetails): void{
        for (let key in orderDetails) {
            console.log(orderDetails[key]);
            this.http.post(this.url + 'order_details/', orderDetails[key], { headers: this.headers})
            .pipe(map(response => response.json())).subscribe(data => {console.log(data);});;
        }
    }

    generateProduct(product: Product): Observable<Product>{
        return this.http.post(this.url + 'products/', product, { headers: this.headers})
        .pipe(map(response => response.json()));
    }

    generateProductImage(productImage: ProductImage): Observable<ProductImage>{
        return this.http.post(this.url + 'product_images/', productImage, { headers: this.headers})
        .pipe(map(response => response.json()));
    }

    getProductImages(): Observable<ProductImage[]>{
        return this.http.get(this.url + "product_images/", { headers: this.headers})
        .pipe(map(response => response.json()))
    }

    getCategories(): Observable<Category[]>{
        return this.http.get(this.url + "categories/", { headers: this.headers})
        .pipe(map(response => response.json()))
    }

    generateCategory(category: Category): Observable<Category>{
        return this.http.post(this.url + 'categories/', category, { headers: this.headers})
        .pipe(map(response => response.json()));
    }

    deleteProduct(id){
        return this.http.delete(this.url + "products/6", { headers: this.headers})
        .pipe(map(response => response.json()))
    }

    setClient(c): void{
        window.localStorage.setItem('client', c._body);
    }

    getClient(): Client{
        return JSON.parse(window.localStorage.getItem('client'));
    }

    setEmployee(e: Employee): void{
        this.employee = new Employee(e.employeeId, e.email, e.firstName, e.lastName, e.password, e.employeeCode, e.departament, e.deleted);
    }

    getEmployee(): Employee{
        return this.employee;
    }

    setLoggedIn(): void{
        LogicService.loggedIn = true;
    }

    isLoggedIn(): boolean{
        return LogicService.loggedIn;
    }

    logout(): void{
        LogicService.loggedIn = false;
        window.localStorage.removeItem("client");   
    }
}