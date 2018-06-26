import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { Bill } from '../model/Bill.model';

@Component({
	selector: 'app-my-bills',
	templateUrl: './my-bills.component.html',
	styleUrls: ['./my-bills.component.css']
})
export class MyBillsComponent implements OnInit {

	bills: Bill[];

	constructor(private logicService: LogicService) {
	}

	ngOnInit() {
		this.logicService.getBills().subscribe(data => {
			this.bills = data;
		});
	}

	getBills(): Bill[]{
		return this.bills;
	}
}