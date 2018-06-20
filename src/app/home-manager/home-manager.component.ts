import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogicService } from '../logic.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home-manager',
	templateUrl: './home-manager.component.html',
	styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent implements OnInit {

	constructor(private logicService: LogicService, private router: Router){
		if(this.logicService.isLoggedIn()){
			if(this.logicService.getClient()){
				this.router.navigate(['/home-client']);
			}
		}
	}

	ngOnInit() {
	}

}
