import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public httpClient: HttpClient) { }
  apiData: any;
  isData = false;// this is for Table Showing
  ngOnInit(): void {

  }
  getData() {
    // Here I am USe Api Call
    this.httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe((response) => {
      this.apiData = response;
      this.isData = true;
      console.log(this.apiData)
    })
  }

}
