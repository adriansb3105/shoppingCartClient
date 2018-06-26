import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LogicService } from '../logic.service';
import { Bill } from '../model/Bill.model';
import * as jsPDF from 'jspdf';

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

	@ViewChild('content') content: ElementRef;
	downloadPDF() {
		let doc = new jsPDF();

		let specialElementHandlers = {
			'#editor': function (element, renderer) {
				return true;
			}
		};

		let content = this.content.nativeElement;

		doc.fromHTML(content.innerHTML, 15, 15, {
			'width': 190,
			'elementHandlers': specialElementHandlers
		});

		doc.save('Bills.pdf');
	}
}