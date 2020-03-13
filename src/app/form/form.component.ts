import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators, MinLengthValidator } from '@angular/forms';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Router} from "@angular/router";
import { Title } from '@angular/platform-browser'; // dynamic title 
import { DatePipe } from '@angular/common';
import { style } from '@angular/animations';
import { CustomValidationComponent } from '../custom-validation/custom-validation.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css', './form.component.scss']
})
export class FormComponent implements OnInit {
  public ppp: number = 2;
  public orderForm: FormGroup;
  stickerImage: File=null;
  fileName: string = null;
  imageUploaded: string;
  delivery_cost :number = 0;
  order_cost;
  total_cost;
  order_on = Date.now();
  amman_delivery_fee: number = 1;
  nonamman_delivery_fee: number = 2;
  arabicCharacters  = /[\u0600-\u06FF]/;

  inputChange(event: any){
    console.log("Changed");
    var mytext = event.target.value;
    if (mytext.match(this.arabicCharacters) && mytext.match(/[a-zA-Z]/)){
      if (mytext[0].match(/[a-zA-Z]/) ){
        document.querySelector('input').style.cssText = "direction: ltr";
        console.log("this is arabic and English text");
      }
      else{
      document.querySelector("input").style.cssText = "direction: rtl";
      }
    }
    else if (mytext.match(this.arabicCharacters)){
      document.querySelector("input").style.cssText = "direction: rtl";
    }
    else if (mytext.match(/[a-zA-Z]/)){
      document.querySelector("input").style.cssText = "direction: ltr";
    }
  }

  constructor(private http: HttpClient, fb: FormBuilder, private router: Router) {
    this.orderForm = fb.group({
      full_name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), CustomValidationComponent.isAllEnLetters]],
      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidationComponent.isMobileNumber]],
      building_number: ['', [Validators.required, Validators.maxLength(10)]],
      street_name: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]],
      area: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      sticker_id: [, Validators.required],
      name_field:['', [Validators.required, CustomValidationComponent.isStickerField, Validators.maxLength(30)]],
      class_field:['', [CustomValidationComponent.isStickerField, Validators.maxLength(30)]],
      school_field:['', [CustomValidationComponent.isStickerField, Validators.maxLength(30)]],
      quantity: [1, Validators.required],
      notes:['', Validators.maxLength(100)],
      
    });
  }

  ngOnInit() {}
  // get FormControls for input validation 
  get name(){return this.orderForm.get("full_name") as FormControl;}
  get number(){return this.orderForm.get("mobile_number") as FormControl;}
  get field1(){return this.orderForm.get("name_field") as FormControl;}
  get field2(){return this.orderForm.get("class_field") as FormControl;}
  get field3(){return this.orderForm.get("school_field") as FormControl;}
  get quantityV(){return this.orderForm.get("quantity") as FormControl;}
  get sticker(){return this.orderForm.get("sticker_id") as FormControl;}
  get additionalNotes(){return this.orderForm.get("notes") as FormControl;}
  get address1(){return this.orderForm.get("building_number") as FormControl;}
  get address2(){return this.orderForm.get("street_name") as FormControl;}
  get address3(){return this.orderForm.get("area") as FormControl;}
  get address4(){return this.orderForm.get("city") as FormControl;}
  


  onStickerIdChange(event:any){
    if (this.sticker.invalid){
      return false;
    }
    else if (this.sticker.valid){
      return true;
    }
  }

  onCityChange(event:any){
    if (this.city.invalid){
      return false;
    }
    else if (this.city.valid){
      return true;
    }
  }
  
  // convenience getter for easy access to form fields
  get full_name(){ return this.orderForm.get('full_name').value}
  get mobile_number(){ return this.orderForm.get('mobile_number').value}
  get building_number(){return this.orderForm.get('building_number').value}
  get street_name(){return this.orderForm.get('street_name').value}
  get area(){return this.orderForm.get('area').value}
  get city(){return this.orderForm.get('city').value}
  get sticker_id(){return this.orderForm.get('sticker_id').value}
  get name_field(){return this.orderForm.get('name_field').value}
  get class_field(){return this.orderForm.get('class_field').value}
  get school_field(){return this.orderForm.get('school_field').value}
  get quantity(){return this.orderForm.get('quantity').value}
  get notes(){return this.orderForm.get('notes').value}

  OrderCost(){
    this.order_cost = this.quantity * this.ppp;
    return this.order_cost;
  }

  DeliveryCost(): any{
    if (this.city == "Amman"){
      this.delivery_cost = 1;
    }
    else if(this.city==''){
      this.delivery_cost = 0;
    }
    else{
      this.delivery_cost = 2;
    }
    return this.delivery_cost;
  }

  TotalCost(){
    return this.OrderCost() + this.DeliveryCost();
  }

  onImageChanged(event){
    console.log(event);
    this.stickerImage = <File>event.target.files[0];
    let l = event.target.files.length;
    if (l==1){this.fileName = this.stickerImage.name}
    else{this.fileName = null}
    if ( l == 0 ){this.imageUploaded = "no image choosen"}
    else if(!event.target.files[0].type.includes('image')){
    this.imageUploaded = "Please upload a valid image " + " " + '<i class="fas fa-exclamation-circle"></i>';
    this.stickerImage = null;
    this.fileName = null;
     }
    else if (event.target.files.length == 1){
      this.imageUploaded = "image is found" + " " + '<i class="fas fa-check-circle"></i>';
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

    if (this.fileName!=null){
    uploadData.append('stickerImage', this.stickerImage, this.stickerImage.name);}
  
    this.http.post('https://shrouded-gorge-71741.herokuapp.com/order/', uploadData).subscribe(
      
      data => {
        console.log("success :)"),
        this.router.navigate(['/order', true])
      },
      error => {
        console.error(error),
      
        this.router.navigate(['/order', false])
      },
    );
  }
  


  

}
