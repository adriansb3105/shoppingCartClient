import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-busines-information',
	templateUrl: './busines-information.component.html',
	styleUrls: ['./busines-information.component.css']
})
export class BusinesInformationComponent implements OnInit {

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
	}
}
