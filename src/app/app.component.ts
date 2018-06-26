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
		if(this.logicService.isLoggedIn() == 'true'){
			this.isLoggedIn = true;
		}else{
			this.isLoggedIn = false;
		}
		
		
		if(this.logicService.getEmployee()){
			this.isAdmin = true;
		}else{
			this.isAdmin = false;
		}
	}
}