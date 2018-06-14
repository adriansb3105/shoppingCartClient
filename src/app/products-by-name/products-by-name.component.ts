import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-by-name',
  templateUrl: './products-by-name.component.html',
  styleUrls: ['./products-by-name.component.css']
})
export class ProductsByNameComponent implements OnInit {
  public resultadoProductos:Array<Product>;
  public imagenesPruebas:Array<String>;
  public categoryprueba: Category= new Category("prueba categoria",false);
  public productosPrueba:Product[];
  public imagenprueba:String="https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=";
  public product = new Product(1,"CAJAS","DE CARTON",1,true,new Category("accesorios",true),this.imagenesPruebas);
  
  constructor() { 

    
  }

  ngOnInit() {
  }

  buscarporNombre():void{
    ///// aqui rellena la lista de productos
 
      }

  addToCart(){

    console.log("se agrega a carrito ")
    //// agregar producto al carrito del cliente
    
  }
    

}

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

export class Category{
	public name:String;
  public  deleted:boolean;
  constructor(name?:String,deleted?:boolean){
    this.deleted=deleted;
    this.name=name;
  }
	
}
