import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from '../all-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public service: AllServicesService,public router:Router) { }
  CartCommingData: any;
  singleObj: any;
  storedCount: any;
  // totalPrice = 0;
  totalPrice=0;
  quantitityStatus=false;
  // data store in cart
  ngOnInit(): void {
    this.CartCommingData = this.service.allCartData;
    this.CartCommingData.forEach((obj: any) => {
      this.singleObj = obj;
      this.singleObj['quantity'] = 1;
      this.singleObj['copyPrice'] = this.singleObj.price;
      // below i applied for total add price
      this.totalPrice = this.totalPrice + obj.copyPrice;
      this.service.finalOrderPrice=this.totalPrice;
      // console.log(this.totalPrice);
    });
    console.log("Card Comming data",this.CartCommingData);
    this.service.finalOrderData=this.CartCommingData;
  }
  // delete data from cart data
  deleteItem(data: number, id: number) {
    console.log('Total Price', this.totalPrice);
    console.log('Delete Price', this.service.allCartData[data].price);
    this.totalPrice = this.totalPrice - this.service.allCartData[data].price;
    this.service.allCartData.splice(data, 1);
    console.log(this.CartCommingData);
    this.service.cartCount = this.CartCommingData.length;
    // console.log('Total Price',this.totalPrice);
    // console.log('Delete Price',this.service.allCartData[data].price);
    if(this.service.cartCount==0){
      this.router.navigate(['/cardListMissing'])
    }

  }
  //increment product number
  increment(data: number,ind:number) {
    this.storedCount = this.CartCommingData.find((x: { id: any; }) => x.id == data)
    
    this.storedCount.quantity += 1;
    // console.log(this.storedCount);
    this.storedCount.price = (this.storedCount.copyPrice * this.storedCount.quantity);
    this.service.cartCount += 1;
    console.log('total price',this.totalPrice);
    // console.log('service all cartData',this.service.allCartData[data].price);
    console.log('storecount data',this.storedCount.copyPrice);
    this.totalPrice = (this.totalPrice + this.storedCount.copyPrice);
    this.service.allCartData.forEach((cartData: any)=>{
      if(cartData.id==data){
        cartData.cartCount +=1;
      }
    })

  }
  // Decrement Product number
  decrement(data: number,ind:number) {

    this.storedCount = this.CartCommingData.find((x: { id: any; }) => x.id == data);
    this.storedCount.quantity -= 1;
    if(this.storedCount.quantity<=0){
    //  this.quantitityStatus=true;
    this.service.allCartData.splice(ind,1);
    // alert("working deleted");
    }
    // console.log(this.storedCount);
    this.storedCount.price = (this.storedCount.copyPrice * this.storedCount.quantity);
    // console.log(this.storedCount.copyPrice * this.storedCount.quantity);
    // console.log(this.storedCount.quantity);
    this.service.cartCount -= 1;
    this.totalPrice = (this.totalPrice - this.storedCount.copyPrice);
  }
  //click on Order Now
  orderNow(){
    if(this.totalPrice==0){
      alert("Product is not Added");
    }
    else{
      // console.log(this.totalPrice);
      
      this.router.navigate(['/orderNow']);
    }
  }
}
