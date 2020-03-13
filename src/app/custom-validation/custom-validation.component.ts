import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent{

    static isAllEnLetters(text){
      const letters = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_][\s][\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*/;
      if (!text.value.match(letters)){
        return {unique: false};
      }
      else {return null};
    }
    
    static isMobileNumber(mobile_number){
      const phoneno = /^[0][7][987]\d/;
      if (!mobile_number.value.match(phoneno) ){
        return {unique: false};
      }
      else {return null;}
    }

    static isStickerField(text){
      const letters = /./;
      
      if(text.value.length==0){
        return null;
      }
      else if(text.value.match(letters)){
        return null;
      }
      else {return {unique: false};}
    }  

    static isAddress(text){
      const letters = /^[0-9a-zA-Z\s:]+$/;
      // if (!text.value.match(letters)){
      //   return {unique: false};
      // }
      if(text.value.length==0){
        return null;
      }
      else if (text.value.length>0 && text.value.match(letters)){
        return null;
      }
      else {return {unique: false};}
    }  

    }
     
  


