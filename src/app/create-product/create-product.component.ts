import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { Category } from '../model/Category.model';
import { first } from 'rxjs/operators';
import { Product } from '../model/Product.model';
import { ProductImage } from '../model/ProductImage.model';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-create-product',
	templateUrl: './create-product.component.html',
	styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

	name: String;
	url1: String;
	url2: String;
	url3: String;
	price: String;
	description: String;
	categoryId: String;
	categories: Category[];

	constructor(private logicService: LogicService) {
		this.categories = new Array();
	}

	ngOnInit() {
		this.logicService.getCategories().pipe(first()).subscribe(data => {
			this.categories = data;
		});
	}

	getCategories(): Category[] {
		return this.categories;
	}

	getCategoryById(idCategory): Category {
		for(let i=0; i<this.getCategories().length; i++){
			if(this.getCategories()[i].categoryId === idCategory){
				return this.getCategories()[i];
			}
		}
	}

	generateProductImage(url: String, product: Product){
		let productImage: ProductImage = new ProductImage(url, product);
		this.logicService.generateProductImage(productImage).subscribe(data => {
			productImage = data;
		});
		return productImage;
	}

	generateProduct() {
		let category: Category = this.getCategoryById(Number(this.categoryId));
		
		let product: Product = new Product(this.name, this.description, Number(this.price), category);
		this.logicService.generateProduct(product).subscribe(data => {
			this.generateProductImage(this.url1, data);
			this.generateProductImage(this.url2, data);
			this.generateProductImage(this.url3, data);

			Swal('Done', 'The product has been created!', 'success');
		});
	}
}