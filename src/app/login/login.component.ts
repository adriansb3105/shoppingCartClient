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

	private adminUser: boolean = true;
	email: String;
	password: String;

	constructor(private route: ActivatedRoute, private router: Router, private logicService: LogicService) {
		if(this.logicService.isLoggedIn){
		//	this.router.navigate(['/home-client']);
		}
	}

	login(): void {
		
		this.logicService.login(this.email, this.password).pipe(first()).subscribe(data => {
			console.log(data);
			
			//if(data.){
				this.logicService.setAuthorization("Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3QHcudyIsImV4cCI6MTUzMDI4MDQyOH0.u5xV7hMKAhrBavexkfe4XtrgCa8AXrs22P_2Q9OcxaMGNwO1H5AW8q0f77s1G8i7gRa_StsfYPBadk_str5oyQ");
			//}
		
			if (!this.isEmpty(this.logicService.getAuthorization)) {

				this.logicService.loginUser(this.email).subscribe(data => {
					//this.authorization = data;
					this.logicService.setClient(data);
				});
			
				//if (this.adminUser) {
				//	console.log("admin");
				//	this.router.navigate(['/home-manager']);

				//} else {
					console.log("client");
					this.router.navigate(['/home-client']);
				//}

			}
		});
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
