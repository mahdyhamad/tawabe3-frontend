import { Injectable } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators, MinLengthValidator } from '@angular/forms';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor(private fb: FormBuilder, orderForm: FormGroup) { 
      orderForm = fb.group({
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
}