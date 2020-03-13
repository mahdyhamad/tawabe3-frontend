import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-city-en',
  templateUrl: './city-en.component.html',
  inputs : ["city"],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CityEnComponent),
    multi: true,
    }],
  styleUrls: ['./city-en.component.css']
})
export class CityEnComponent{

  cities = [
    {id:1, name:'Amman', arabic_name:'عمان'},
    {id:2, name:'Irbid', arabic_name:'إربد'},
    {id:3, name:'Zarqa', arabic_name:'الزرقاء'},
    {id:4, name:'AlBalqa', arabic_name:'البلقاء'},
    {id:5, name:'AlKarak', arabic_name:'الكرك'},
    {id:6, name:'Mafraq', arabic_name:'المفرق'},
    {id:7, name:'Jarash', arabic_name:'جرش'},
    {id:8, name:'Madaba', arabic_name:'مادبا'},
    {id:9, name:'Ajlun', arabic_name:'عجلون'},
    {id:10, name:'Maan', arabic_name:'معان'},
    {id:11, name:'AlTafilah', arabic_name:'الطفيلة'},
    {id:12, name:'Aqaba', arabic_name:'العقبة'},
  ]

  public city: String;
 
  public get cityName():String{
    return this.city;
  }
  
  public set cityName(value:String){
    this.city = value;
  }

 

  setCityName(cityName){
    this.cityName = cityName;
    this.OnChangefn(this.cityName);
  }



  OnChangefn = (_) => _;

  constructor() { }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {

    this.OnChangefn= fn;

  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

}
