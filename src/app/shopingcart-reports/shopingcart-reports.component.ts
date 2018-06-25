import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
	selector: 'app-shopingcart-reports',
	templateUrl: './shopingcart-reports.component.html',
	styleUrls: ['./shopingcart-reports.component.css']
})
export class ShopingcartReportsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
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

		//doc.fromHTML(content.innerHTML, 15, 15, { //without css
		doc.fromHTML(content.innerHTML, 15, 15, {
			'width': 190,
			'elementHandlers': specialElementHandlers
		});

		doc.save('test.pdf');
	}
}
