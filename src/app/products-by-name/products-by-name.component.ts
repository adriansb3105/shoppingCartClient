import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';
import { Category } from '../model/Category.model';
import { LogicService } from '../logic.service';
import { ShoppingCart } from '../model/ShoppingCart.model';
import { Client } from '../model/Client.model';

@Component({
	selector: 'app-products-by-name',
	templateUrl: './products-by-name.component.html',
	styleUrls: ['./products-by-name.component.css']
})

export class ProductsByNameComponent implements OnInit {
	public products: Array<Product>;
	public shoppingCart: ShoppingCart;

	shoppingCartId: number;
    quantity:number;
    dateCreated:String;
    deleted:boolean;
    client:Client;
	
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

	addToCart(product: Product) {
		this.client = new Client(1, "adrian@mail.com", "Adrian", "Serrano", "abc123", "Cartago", "30106", "88888888", "Al norte de la plaza", false);

		this.shoppingCart = new ShoppingCart(this.shoppingCartId, this.quantity, this.dateCreated,
					this.deleted, this.client, product);
		this.logicService.addToCart(this.shoppingCart).subscribe(data => {alert("Se ha agregado el producto");});
	}
}