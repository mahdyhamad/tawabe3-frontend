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
    if (window.location.href =="https://nameless-coast-52919.herokuapp.com/order/true"){
      return true;
    }

    else{
      return false;
    }
  }

}
