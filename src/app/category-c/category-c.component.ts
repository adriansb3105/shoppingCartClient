import { Component, OnInit } from '@angular/core';
import { AboutComponent } from 'src/app/about/about.component';
import{ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-category-c',
  templateUrl: './category-c.component.html',
  styleUrls: ['./category-c.component.css'],
})
export class CategoryCComponent implements OnInit {

products=[{name:'casco',id:1},
{name:'coso',id:2}
];

private peliculas: Genero[] = new Array<Genero>();

show: boolean = false;
varr:any;

  constructor() { 


    this.peliculas=[new Genero(1,"uno"),new Genero(3,"dos")];

  }
  onClickMe():void{
    this.show=true;
    this.varr='se hizo click';
    console.log("se hizo click");
  }

  ngOnInit() {
  }

}

export class Genero{
  codGenero:number;
  nombreGenero:string;
  constructor(codGenero?:number,nombreGenero?:string){
      this.codGenero=codGenero;
      this.nombreGenero=nombreGenero;
  }
}

