import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private logicService: LogicService, private router: Router) {
		if(this.logicService.isLoggedIn){
			//this.router.navigate(['/home-client']);
		}
		console.log("home");
	}

	ngOnInit() {
	}
}
