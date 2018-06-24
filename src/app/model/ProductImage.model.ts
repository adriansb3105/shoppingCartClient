import { Product } from "./Product.model";

export class ProductImage {

	public productImageId: number;
	public url: String;
	public product: Product;
	public deleted: boolean;

	constructor(url: String, product: Product) {
		this.url = url;
		this.product = product;
	}
}