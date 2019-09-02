import { Component, OnInit } from '@angular/core';
import {LogdataService} from '../logdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http2:LogdataService) { }

  ngOnInit() {

    this.http2.getDetails();
console.log();
  }

}
