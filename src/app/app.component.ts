import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public currentUser: string;
public title = ' shoping cart';
public description='descripcion';
public manager:boolean=false;
public client:boolean=false;
public managerNavBar:boolean= false;
public clientNavBar:boolean= true;
public loggedIn:boolean=true;
public currentEmployee: Employee;
public currentClient:Client;


login():void{

//// traerse al empleado o al admin


  if(this.currentEmployee.employeeId){
    console.log("admin");
   this.currentUser= this.currentEmployee.firstName;
   this.managerNavBar=true;
   this.loggedIn=true;


  }else if(this.currentClient.clientId){

    console.log("client");
    this.currentUser=this.currentClient.firstName;
    this.clientNavBar=true;
    this.loggedIn=true
  }

 }

loggedout():void{

   this.manager=false;
   this.client=false;
   this.loggedIn =false;
   this.managerNavBar=false;
   this.clientNavBar= false;
   this.currentEmployee=null;
   this.currentClient=null;

}


}
export class Employee{

  employeeId:number;
  email: string;
  firstName: string;
  lastname:string;
  password:string;
  employeeCode:string;
  department:string;
  deleted:boolean;

  constructor(employeeId?:number,email?:string, firstname?:string,
  lastname?:string, password?:string,employeeCode?:string,
  department?:string,deleted?:boolean){
    this.employeeId=employeeId;
    this.email=email;
    this.firstName=firstname;
    this.lastname=lastname;
    this.password=password;
    this.employeeCode=employeeCode;
    this.department=department;
    this.deleted=deleted;

  }


}

export class Client{

  clientId:number;
  email: string;
  firstName: string;
  lastname:string;
  password:string;
  city:string;
  postalCode:string;
  telephone:string;
  description:string;
  deleted:boolean;

  constructor(clientId?:number,email?:string, firstname?:string,
  lastname?:string, password?:string,city?:string,
  postalCode?:string,telephone?:string,
  description?:string,deleted?:boolean){
    this.clientId=clientId;
    this.email=email;
    this.firstName=firstname;
    this.lastname=lastname;
    this.password=password;
    this.city=city;
    this.postalCode=postalCode;
    this.telephone=telephone;
    this.description=description;
    this.deleted=deleted;

  }
}