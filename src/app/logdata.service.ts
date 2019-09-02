import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogdataService {
  arrLogin:String[];
  constructor(private http1:HttpClient) { }

  getDetails()
  {
    this.http1.get('/assets/Data2.Json').subscribe(
      data => {
        this.arrLogin = data as string [];	 // FILL THE ARRAY WITH DATA.
       
      });
  }



  
}
