import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})


export class FirstComponent implements OnInit {

  private a: string = "a";
  constructor() { }

  ngOnInit() {
	  this.a = 'd';
  }

}
