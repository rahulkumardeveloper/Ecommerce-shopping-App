import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from '../all-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public service: AllServicesService,public router:Router) { }
  authStatus: any;
  Cartlength:any;

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.authStatus = this.service.authentication;
    this.Cartlength=this.service.cartCount;
    
  }
  cardCall(){
   if(this.Cartlength==0){
     console.log("card lenght is 0");
    this.router.navigate(['/cardListMissing']);
   }
   else{
     this.router.navigate(['/card']);
   }

  }

}
