import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private adminUser:boolean= true;
  private loggedIn :boolean=true;
  varr:any;

  constructor(private route:ActivatedRoute,  private router: Router) { }

  login():void{
   //en este metodo se llama el servicio para hacer log in
   //chequea que sea admin o cliente para renderizar su respectiva vista
   if(this.loggedIn){

    if(this.adminUser){
      console.log("admin");
      this.router.navigate(['/home-manager']);

    }else{
      console.log("client");
      this.router.navigate(['/home-client']);
    }

   }
   
  }


  ngOnInit() {
  }

}
