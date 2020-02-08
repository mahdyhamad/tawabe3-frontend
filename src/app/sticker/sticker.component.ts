import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  inputs:['sticker_id'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StickerComponent),
    multi: true,
  }],
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements ControlValueAccessor {

  
  stickers= [
    {id:1, src:'assets/stickers/1.jpg', name:''},
    {id:2, src:'assets/stickers/2.jpg', name: ''},
    {id:3, src:'assets/stickers/3.jpg', name: ''},
    {id:4, src:'assets/stickers/4.jpg', name: ''},  
  ]


  public sticker_id: number;

  public get stickerId():number{
    return this.sticker_id;
  }

  public set stickerId(value:number){
    this.sticker_id = value;
  }

  setStickerId(stickerId){
    this.stickerId = stickerId;
    this.OnChangefn(this.stickerId);
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
