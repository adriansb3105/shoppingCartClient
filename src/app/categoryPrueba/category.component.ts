import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
name:any;
sub: any;
show:true;

  constructor(private route:ActivatedRoute, private router: Router) { }

 onClickMe():void {
   console.log('algo');
   this.router.navigate(['/about']);
};
 

  ngOnInit() {
  this.sub=this.route.params.subscribe(params =>{
    this.name=params['name']
  })
  }



}
