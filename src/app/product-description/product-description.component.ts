import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../all-services.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(public service:AllServicesService) { }
 singleDataComing:any;
 buttonStatus=false;
  
  ngOnInit(): void {
    this.singleDataComing=this.service.singleData;
    console.log(this.singleDataComing);
  }
  
  

}
