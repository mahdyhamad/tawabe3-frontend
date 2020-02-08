import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  // used to bind data between components - two way data binding
  @Input() orderForm;
  @Input() ppp: number; // stands for: price per paper
  @Input() full_name: string;
  @Input() mobile_number: string;
  @Input() address1: string;
  @Input() address2: string;
  @Input() address3: string;
  @Input() city: string;
  @Input() quantity: number;
  @Input() order_cost: number;
  @Input() delivery_cost: number;
  @Input() total_cost: number;
  @Input() order_on: number;
  @Input() delivery_on: number;
  
  public items: number = 1;
  

  constructor() { }


}
