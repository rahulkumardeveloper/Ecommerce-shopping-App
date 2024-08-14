import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServicesService } from '../all-services.service';
import { MustMatch } from './custom validation/custom validation';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

 
  constructor(public formBuilder: FormBuilder,public route:Router,public service:AllServicesService) { }
  
 
  signupForm!: FormGroup;
  gloabalStatus = false;
  

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'confirmPassword')// Now This line using for Custome Validation
    })
    
  }
  onSubmit() {
    this.gloabalStatus = true;

    // before enterring data return
    if (this.signupForm.invalid) {
      return;
    }
    // this.gloabalStatus=true;
    else{
      this.service.registerData(this.signupForm.value);
      console.log(this.signupForm.value);
      let myobj=this.signupForm.value;
      //locat storage
      localStorage.setItem('data', JSON.stringify(myobj));
      // let userData=JSON.parse(localStorage.getItem(data));
      this.route.navigate(['/registerSuccessfull']);
      //userName Assign for Orderslip
     this.service.finalOrderSlipname= this.signupForm.value.name;
    }
  }
  resetData(){
    this.signupForm.reset();
  }

}
