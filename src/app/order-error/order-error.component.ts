import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-error',
  templateUrl: './order-error.component.html',
  styleUrls: ['./order-error.component.css']
})
export class OrderErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  findUrl(){
    if (window.location.href =="http://localhost:4200/order/true"){
      return true;
    }

    else{
      return false;
    }
  }

}
