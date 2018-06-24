
export class Category {

	public categoryId: number;
	public name: String;
	public deleted: boolean;

	constructor(name?: String) {
		this.name = name;
	}
}
