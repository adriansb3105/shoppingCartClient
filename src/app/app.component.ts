import { Component } from '@angular/core';
import { LogicService } from './logic.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	isAdmin: boolean;
	isLoggedIn: boolean;

	constructor(private logicService: LogicService) {
		this.isLoggedIn = this.logicService.isLoggedIn();
		console.log("app");
		if(this.logicService.getEmployee()){
			this.isAdmin = true;
		}else{
			this.isAdmin = false;
		}
	}

	login(): void {
	}
}