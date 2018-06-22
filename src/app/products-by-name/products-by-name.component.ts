import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';
import { Category } from '../model/Category.model';
import { LogicService } from '../logic.service';
import { ShoppingCart } from '../model/ShoppingCart.model';
import { Client } from '../model/Client.model';
import { Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
	selector: 'app-products-by-name',
	templateUrl: './products-by-name.component.html',
	styleUrls: ['./products-by-name.component.css']
})

export class ProductsByNameComponent implements OnInit {
	public products: Array<Product>;
	public shoppingCart: ShoppingCart;
	shoppingCartId: number;
    dateCreated:String;
    deleted:boolean;
	client:Client;
	isProductEmpty: boolean;
	
	
	constructor(private logicService: LogicService, private router: Router, private filterPipe: FilterPipe) {
		//if(!this.logicService.isLoggedIn()){
		//	this.router.navigate(['/login']);
		//}
		this.products = new Array;
	}

	ngOnInit() {
		this.isProductEmpty = true;
		this.logicService.productsByName().subscribe(data => {
			this.products = data;
			this.isProductEmpty = false;
		});
	}

	getProducts(): Product[] {
		return this.products;
	}

	addToCart(product: Product) {
		this.client = this.logicService.getClient();

		this.shoppingCart = new ShoppingCart(this.shoppingCartId, 0, this.dateCreated,
					this.deleted, this.client, product);
		this.logicService.addToCart(this.shoppingCart).subscribe(data => {alert("Se ha agregado el producto");});
	}
}