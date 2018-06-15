import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {

  constructor() {

   
  }

  ngOnInit() {
  }

  buscarporCategoria():void{

  }

  addToCart(){

    console.log("se agrgaron al carrito ");
  }

}

