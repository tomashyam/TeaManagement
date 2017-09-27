import { Component } from '@angular/core';
import { sereverVue } from './server-vue/server-vue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app works!';
}
