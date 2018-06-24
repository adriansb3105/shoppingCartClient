import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { Category } from '../model/Category.model';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-create-category',
	templateUrl: './create-category.component.html',
	styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
	name: String;

	constructor(private logicService: LogicService) { }

	ngOnInit() {
	}

	generateCategory() {
		let category: Category = new Category(this.name);

		this.logicService.generateCategory(category).subscribe(data => {
			Swal('Done', 'The category has been created!', 'success');
		});
	}

}
