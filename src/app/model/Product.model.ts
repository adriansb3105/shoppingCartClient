import { Category } from './Category.model';

export class Product{
    public productId: number;
      public name:String;
      public description:String;
      public price:number;
      public  deleted:boolean;
      public  category:Category;
    public productImages:Array<String>;
    constructor(productId?:number,name?:String,description?:String,
      price?:number,deleted?:boolean, category?:Category,
       productImages?:Array<String>){
  
      this.productId=productId;
      this.name=name;
      this.description=description;
      this.price=price;
      this.deleted=deleted;
      this.category=category;
      this.productImages=productImages;
    }
  
  
  }