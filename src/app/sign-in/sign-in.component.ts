import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Client } from '../model/Client.model';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	private inputEmail: String;
	private inputPassword: String;
	private firstName: String;
	private lastName: String;
	private city: String;
	private postalcode: String;
	private telephone: String;
	private description: String;

	constructor(private logicService: LogicService, private router: Router) {
	}

	ngOnInit() {
	}

	generateClient() {
		let client: Client = new Client(this.inputEmail,this.firstName, this.lastName, this.inputPassword,
			this.city, this.postalcode, this.telephone, this.description);
		this.logicService.generateClient(client).subscribe(data => {
			Swal('Done', 'Your user has been created', 'success');
			this.router.navigate(['/login']);
		});
	}

}