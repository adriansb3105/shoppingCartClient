import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

	constructor(private logicService: LogicService, private router: Router) {
		this.logicService.logout();

		if(!logicService.getClient()){
			console.log('Logout - Client');
		}

		if(!logicService.getEmployee()){
			console.log('Logout - Employee');
		}
		
		this.router.navigate(['/home']);
	}

	ngOnInit() {
	}

}
