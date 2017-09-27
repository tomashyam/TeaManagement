import { Component } from '@angular/core';
<<<<<<< HEAD
import { sereverVue } from './server-vue/server-vue.component';
=======
import { Http } from '@angular/http';
>>>>>>> a972bb83b2fc7e354b6e3091901c82a05f681f21

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  myData: Array<any>;

  constructor(private http:Http) {

    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);

  }
}
