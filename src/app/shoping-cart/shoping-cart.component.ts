import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { Product } from '../model/Product.model';

@Component({
	selector: 'app-shoping-cart',
	templateUrl: './shoping-cart.component.html',
	styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
	public products: Array<Product>;

	constructor(private logicService: LogicService) {
		this.products = new Array;
	}

	ngOnInit() {
		this.logicService.productsByName().subscribe(data => {
			this.products = data;
		});
	}

	getProducts(): Product[] {
		return this.products;
	}
}
