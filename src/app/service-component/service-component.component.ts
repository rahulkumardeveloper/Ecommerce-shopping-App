import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
serviceData=[
  {
    title:"Web Developement",
    imgSrc:"https://ares.decipherzone.com/blog-manager/uploads/banner_webp_bea99db8-7dba-41e7-941c-de4b61cc1650.webp",
    content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptates praesentium assumenda ipsa eos",
    
  }
]

}
