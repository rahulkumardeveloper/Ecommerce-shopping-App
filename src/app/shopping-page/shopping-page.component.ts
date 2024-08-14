import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from '../all-services.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {

  constructor(public service: AllServicesService, public httpclient: HttpClient, public router: Router) { }
  allData: any;
  singleObj: any = {};
  categorylist: any;
  buttonStatus = false;

  ngOnInit(): void {
    this.showData();
    this.selectCategory();
  }
  // ngDoCheck(){
  //   this.allData=this.service.filterData;
  // }
  showData() {
    this.service.callShoppingApi().subscribe(res => {
      this.allData = res;
      this.allData.forEach((res: any) => {
        this.singleObj = res;
        this.singleObj['status'] = false;
      })
      // console.log(this.allData);
      // console.log(typeof (this.allData));
    });

  }
  // call category
  selectCategory() {
    this.service.callCategoryApi().subscribe(res => {
      this.categorylist = res;
      console.log(this.categorylist);
    })
  }
  // for option selection
  getCategory(data: any) {
    this.httpclient.get(`https://fakestoreapi.com/products/category/${data.target.value}`).subscribe(res => {
      this.allData = res;
    })
    // console.log(data.target.value);

  }
  addTocard(data: number) {
    // alert("Add to Card");
    this.service.foundId(data).subscribe(res => {
      // console.log(res);
      this.service.allCartData.push(res);
      this.service.cartCount +=1;
      this.buttonStatus = true;
      this.allData[data - 1].status = true;
    })
  }
  Description(data:number) {
    this.service.foundId(data).subscribe(res => {
      this.service.singleData=res;
      this.router.navigate(['/productDescription']);
      // console.log(this.service.singleData);
   
    })
  }

}
