import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostOrderService {

  constructor(private http: HttpClient) {
    

   }
}
