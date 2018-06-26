import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogicService } from '../logic.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home-client',
	templateUrl: './home-client.component.html',
	styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {

	user: String;

	constructor(private logicService: LogicService, private router: Router){
		if(this.logicService.isLoggedIn() == 'true'){
			this.user = this.logicService.getClient().firstName;
			if(this.logicService.getEmployee()){
				this.router.navigate(['/home-manager']);
			}
		}
	}

	ngOnInit() {
	}
}
