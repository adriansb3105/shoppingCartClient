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
	public orderDetails;
	private orderDetail: OrderDetail;
	isShoppingCartEmpty: boolean;

	constructor(private logicService: LogicService) {
		this.shoppingCarts = new Array;
		this.orderDetails = {};
	}

	ngOnInit() {
		this.isShoppingCartEmpty = true;
		this.logicService.getShoppingCarts().subscribe(data => {
			this.shoppingCarts = data;
			this.isShoppingCartEmpty = false;
		});
	}

	getShoppingCarts(): ShoppingCart[] {
		return this.shoppingCarts;
	}

	getShoppingCartById(id): ShoppingCart {
		for (let i = 0; i < this.getShoppingCarts().length; i++) {
			if (this.getShoppingCarts()[i].shoppingCartId === id) {
				return this.getShoppingCarts()[i];
			}
		}
		return null;
	}

	onQuantityChange(id, evt) {
		this.getShoppingCartById(id).quantity = Number(evt.target.value);
	}

	checkProduct(obj) {
		if (!this.orderDetails[obj.target.id]) {
			this.orderDetails[obj.target.id] = this.createOrderDetail(obj);
		} else {
			delete this.orderDetails[obj.target.id];
		}
		
		console.log(this.orderDetails);
	}

	createOrderDetail(obj): OrderDetail {
		//quantity: number, price: number, tax: number, bill: Bill, product : Product
		return new OrderDetail(this.getShoppingCartById(Number(obj.target.id)).quantity,
			this.getShoppingCartById(Number(obj.target.id)).product.price,
			0.13,
			null,
			this.getShoppingCartById(Number(obj.target.id)).product);
	}

	generatePurchase() {
		if (!this.isEmpty(this.orderDetails)) {
			
		} else {
			alert("Debe seleccionar al menos un producto");
		}
	}

	isEmpty(obj) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key))
				return false;
		}
		return true;
	}

	isSelected(arr, el) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == el) {
				return el;
			}
		}
	}

	removeElement(arr, el) {
		let index = arr.indexOf(el);
		if (index > -1) {
			arr.splice(index, 1);
		}
	}
}
