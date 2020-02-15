import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Title } from '@angular/platform-browser'; // dynamic title 
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css', './form.component.scss']
})
export class FormComponent implements OnInit {
  
  public ppp: number = 2;
  orderForm: FormGroup;
  stickerImage: File=null;
  fileName: string = null;
  imageUploaded: string;
  delivery_cost;
  order_cost;
  total_cost;

  order_on = Date.now();

  amman_delivery_fee: number = 1;
  nonamman_delivery_fee: number = 2;

  constructor(private http: HttpClient, private fb: FormBuilder) { 
    this.orderForm = this.fb.group({
      full_name: ['', Validators.required],
      mobile_number: ['', [Validators.required, Validators.maxLength(10)]],
      building_number: ['', Validators.required],
      street_name: ['', Validators.required],
      area: ['', Validators.required],
      city: [, Validators.required],
      sticker_id: [1, Validators.required],
      name_field:['', Validators.required],
      class_field:[''],
      school_field:[''],
      quantity: [1, Validators.required],
      notes:['']
    })
  }

  

  ngOnInit() {
    
  
  }

  get full_name(){
    return this.orderForm.get('full_name').value;
  }

  get mobile_number(){
    return this.orderForm.get('mobile_number').value;
  }
   
  get building_number(){
    return this.orderForm.get('building_number').value;
  }

  get street_name(){
    return this.orderForm.get('street_name').value;
  }
  
  get area(){
    return this.orderForm.get('area').value;
  }

  get city(){
    return this.orderForm.get('city').value;
  }

  get sticker_id(){
    return this.orderForm.get('sticker_id').value;
  }

  get name_field(){
    return this.orderForm.get('name_field').value;
  }

  get class_field(){
    return this.orderForm.get('class_field').value;
  }

  get school_field(){
    return this.orderForm.get('school_field').value;
  }

  get quantity(){
    return this.orderForm.get('quantity').value;
  }

  get notes(){
    return this.orderForm.get('notes').value;
  }

  OrderCost(){
    this.order_cost = this.quantity * this.ppp;
    return this.order_cost;
  }

  DeliveryCost(){
    if (this.city !=="AMMAN" && this.city !=null){
      this.delivery_cost = this.nonamman_delivery_fee;
    }

    else if (this.city===null){
      this.delivery_cost=0;
    }
    else{
      this.delivery_cost = this.amman_delivery_fee;
    }
    return this.delivery_cost;
  }

  TotalCost(){
    return this.OrderCost() + this.DeliveryCost();
  }

  onImageChanged(event:any){
    this.stickerImage = <File>event.target.files[0];
    this.fileName = this.stickerImage.name;
    if (this.fileName==null){
      this.imageUploaded = "no image choosen"
    }
    else{
      this.imageUploaded = "image is found" + " " + '<i class="fas fa-check-circle"></i>'
    }

  }

  newOrder(){ // on submit
    const uploadData = new FormData();
    uploadData.append('full_name', this.full_name);
    uploadData.append('mobile_number', this.mobile_number);
   
    uploadData.append('building_number', this.building_number);
    uploadData.append('street_name', this.street_name);
    uploadData.append('area', this.area);
    uploadData.append('city', this.city);
   
    uploadData.append('name_field', this.name_field);
    uploadData.append('class_field', this.class_field);
    uploadData.append('school_field', this.school_field);
    uploadData.append('quantity', this.quantity);
    uploadData.append('sticker_id', this.sticker_id);
    uploadData.append('added_notes', this.notes);
   
    uploadData.append('order_fees', this.OrderCost());
    uploadData.append('delivery_fees', this.DeliveryCost());
    uploadData.append('total_fees', this.TotalCost());

    if (this.stickerImage!=null){
    uploadData.append('stickerImage', this.stickerImage, this.stickerImage.name);}
  
    this.http.post('http://localhost:8000/order/', uploadData).subscribe(
      data => console.log(data),
      error => console.error(error),
      
    );}
  


  

}
