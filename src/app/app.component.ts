import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	/*
	public currentUser: string;
	public title = ' shoping cart';
	public description = 'descripcion';
	public manager: boolean = false;
	public client: boolean = false;
	public managerNavBar: boolean = true;
	public clientNavBar: boolean = true;
	public loggedIn: boolean = true;
	*/
	//public currentEmployee: Employee;
	//public currentClient: Client;

	constructor() {
		console.log("app");
	}

	login(): void {

		//// traerse al empleado o al admin


		//if(this.currentEmployee.employeeId){
		//  console.log("admin");
		// this.currentUser= this.currentEmployee.firstName;
		//this.managerNavBar=true;
		// this.loggedIn=true;


		// }else if(this.currentClient.clientId){

		// console.log("client");
		//  this.currentUser=this.currentClient.firstName;
		//  this.clientNavBar=true;
		//  this.loggedIn=true
		//}

		//}

		//loggedout():void{
		//
		//   this.manager=false;
		//  this.client=false;
		//   this.loggedIn =false;
		//   this.managerNavBar=false;
		//   this.clientNavBar= false;
		//   this.currentEmployee=null;
		//   this.currentClient=null;

		//}


	}
}