import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { Product } from '../model/Product.model';
import { ShoppingCart } from '../model/ShoppingCart.model';
import { OrderDetail } from '../model/OrderDetail.model';

@Component({
	selector: 'app-shoping-cart',
	templateUrl: './shoping-cart.component.html',
	styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
	public shoppingCarts: Array<ShoppingCart>;
	public selectedProducts: Array<OrderDetail>;
	private orderDetail: OrderDetail;

	constructor(private logicService: LogicService) {
		this.shoppingCarts = new Array;
		this.selectedProducts = new Array;
	}

	ngOnInit() {
		this.logicService.getShoppingCarts().subscribe(data => {
			this.shoppingCarts = data;
		});
	}

	getShoppingCarts(): ShoppingCart[] {
		return this.shoppingCarts;
	}

	getShoppingCartById(id): ShoppingCart{
		for(let i = 0; i < this.getShoppingCarts().length; i++){
			if(this.getShoppingCarts()[i].shoppingCartId === id){
				return this.getShoppingCarts()[i];
			}
		}
		return null;
	}

	onQuantityChange(id, evt){
		this.getShoppingCartById(id).quantity = Number(evt.target.value);
	}

	checkProduct(obj){
		//ver como hago para saber si marque o desmarque
		console.log(obj);
		//quantity: number, price: number, tax: number, bill: Bill, product : Product
		/*this.orderDetail = new OrderDetail(	this.getShoppingCartById(Number(obj.target.id)).quantity,
											this.getShoppingCartById(Number(obj.target.id)).product.price,
											0.13,
											null,
											this.getShoppingCartById(Number(obj.target.id)).product);
		this.selectedProducts.push(this.orderDetail);
		console.log(this.selectedProducts);*/
	}

	generatePurchase(){
		
	}
}
