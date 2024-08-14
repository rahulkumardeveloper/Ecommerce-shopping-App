import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(public httpClient: HttpClient) { }
  logindata: any = [];
  authentication = false;
  filterData:any;
  finalOrderData:any;// show on Payment page
  finalOrderPrice:any;// show on Payment page
  finalOrderSlipname:any// show in orderslip  

  singleData:any={};
  allCartData:any=[];
  cartCount=0;
  

  registerData(data: any) {
    this.logindata.push(data)
    // alert("service is working");
    // console.log(this.logindata)
  }

  authenticate() {
    this.authentication = true;
  }
  //get All product with Api ok
  callShoppingApi() {
    return this.httpClient.get("https://fakestoreapi.com/products");
  }
  // Call Category shopping Apli
  callCategoryApi() {
    return this.httpClient.get("https://fakestoreapi.com/products/categories");
  }
  // filter funt
  // filterCategory(data: any) {
  //   this.httpClient.get(`https://fakestoreapi.com/products/category/${data}`).subscribe(res => {
  //     // console.log(res);
  //     this.filterData=res;
  //   })
  foundId(data:number){
    return this.httpClient.get(`https://fakestoreapi.com/products/${data}`);
  }
  }


