import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {


  title="Home";
  constructor(private obj:DataService) { }

  ngOnInit() {

    this.obj.getJSON().subscribe(data => {
      console.log(data);
  });
  }
}
