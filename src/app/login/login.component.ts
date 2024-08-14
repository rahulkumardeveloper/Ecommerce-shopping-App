import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllServicesService } from '../all-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder, public dataservice: AllServicesService, public router: Router) { }
  loginForm:any;
  registerData = this.dataservice.logindata[0];
  massage="";
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  onLogin() {

    if (this.loginForm.invalid) {
      return;
    }

    else if (this.registerData.email == this.loginForm.value.email && this.registerData.password == this.loginForm.value.password) {

      this.dataservice.authenticate();
      this.loginForm.value.email=''
      this.loginForm.value.password=''
      this.massage="Login Successfull";
      this.loginForm.reset();
      this.router.navigate(["/shoppingPage"]);
    }
    else {
      alert("Email and Password is Wrong");
    }

  }
  resetData(){
     this.loginForm.reset();
    
  }
}
