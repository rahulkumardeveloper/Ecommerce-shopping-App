import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../all-services.service';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent implements OnInit {

  constructor(public service: AllServicesService) { }
  customerName: any;
  customerOrderPrice: any;
  customerFinalData: any

  ngOnInit(): void {
    this.customerOrderPrice = this.service.finalOrderPrice;
    this.customerFinalData = this.service.finalOrderData;
    this.customerName = this.service.finalOrderSlipname;
  }

  checkprice() {


  }
}
