import { Category } from './Category.model';
import { ProductImage } from './ProductImage.model';

export class Product {
	public productId: number;
	public name: String;
	public description: String;
	public price: number;
	public deleted: boolean;
	public category: Category;
		
	constructor(name?: String, description?: String, price?: number, category?: Category) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.category = category;
	}
}