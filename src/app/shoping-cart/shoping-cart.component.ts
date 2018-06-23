import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { Product } from '../model/Product.model';
import { ShoppingCart } from '../model/ShoppingCart.model';
import { OrderDetail } from '../model/OrderDetail.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Bill } from '../model/Bill.model';
import { Client } from '../model/Client.model';

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


	constructor(private logicService: LogicService, private router: Router) {
		if (!this.logicService.isLoggedIn()) {
			this.router.navigate(['/login']);
		}
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
		//	console.log(this.getShoppingCartById(id));
	}

	checkProduct(obj) {
		if (!this.orderDetails[obj.target.id]) {
			this.orderDetails[obj.target.id] = this.createOrderDetail(obj);
		} else {
			delete this.orderDetails[obj.target.id];
		}

		//	console.log(this.orderDetails);
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
			Swal({
				title: 'Are you sure?',
				text: 'It will generate an order with the selected items',
				type: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, generate it!',
				cancelButtonText: 'No, cancel'
			}).then((result) => {
				let billId: number;
				if (result.value) {

					let totalValue: number = 0;
					//let billId: number = 0;

					for (let key in this.orderDetails) {
						totalValue += this.orderDetails[key].price * this.orderDetails[key].quantity
					}

					let client: Client = this.logicService.getClient();
					let bill: Bill = new Bill(new Date(), totalValue, client);

					this.logicService.generateBill(bill).subscribe(data => {
						//billId = data.billId;
						//console.log('billId', billId);

						for (let key in this.orderDetails) {
							this.orderDetails[key].bill = data;
						}

						this.logicService.generateOrderDetail(this.orderDetails);
						Swal('Yay!', 'Your purchase has been done!', 'success');
					});
				}
			})
		} else {
			Swal('Oops...', 'Select at least one item!', 'error');
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
