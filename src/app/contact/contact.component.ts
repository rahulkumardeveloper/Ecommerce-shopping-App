import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public fb: FormBuilder, public route: Router) { }
  // contactDetails:any;
  contactForm!: FormGroup
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      mobilenumber: ['', [Validators.required, Validators.minLength(8)]],
      location: ['', [Validators.required]]
    })
  }
  onSend() {
    if (this.contactForm.invalid) {
      return;
    }
    else {
      console.log(this.contactForm.value);
      // this.contactDetails=this.contactForm.value;
      // alert(this.contactDetails);
      this.route.navigate(["/home"]);
    }
  }
  resetData(){
 this.contactForm.reset();
  }

}
