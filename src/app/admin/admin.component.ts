import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'User Details';
  constructor(private httpService: HttpClient) { }
  arrUser: string [];
  ngOnInit() {
    this.httpService.get('./assets/Sample.JSON').subscribe(
      data => {
        this.arrUser = data as string [];	 // FILL THE ARRAY WITH DATA.
       
      });

  
    }
}
