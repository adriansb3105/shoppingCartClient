import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LogicService } from '../logic.service';
import { first } from 'rxjs/operators';
import { Client } from '../model/Client.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	correctUser: boolean;
	email: String;
	password: String;
	code: String;
	isEmployee: boolean;

	constructor(private route: ActivatedRoute, private router: Router, private logicService: LogicService) {
		console.log('login - isLogged', this.logicService.isLoggedIn());
		this.correctUser = true;
		if(this.logicService.isLoggedIn()){
			if(this.logicService.getClient()){
				this.router.navigate(['/home-client']);
			}else if(this.logicService.getEmployee()){
				this.router.navigate(['/home-manager']);
			}
		}
	}

	login(): void {
		if(this.isEmployee){
			this.logicService.loginEmployee(this.code, this.email, this.password).pipe(first()).subscribe(data => {
				console.log('employee', data);
				if(!this.isEmpty(data) && data.hasOwnProperty("_body") && data._body != ""){
					this.correctUser = true;
					this.logicService.setEmployee(data);
					this.logicService.setLoggedIn();
				
					this.router.navigate(['/home-manager']);
				}else{
					this.correctUser = false;
				}
			});
		}else if(!this.isEmployee){
			this.logicService.loginClient(this.email, this.password).pipe(first()).subscribe(data => {
				console.log('cliente', data);
				
				if(!this.isEmpty(data) && data.hasOwnProperty("_body") && data._body != ""){
					this.correctUser = true;
					this.logicService.setClient(data);
					this.logicService.setLoggedIn();
				
					this.router.navigate(['/home-client']);
				}else{
					this.correctUser = false;
				}
			});
		}
	}

	isEmpty(prop): boolean{
		return (
			prop === null ||
			prop === undefined ||
			(prop.hasOwnProperty('length') && prop.length === 0) ||
			(prop.constructor === Object && Object.keys(prop).length === 0)
		);
	}


	ngOnInit() {
	}

}
