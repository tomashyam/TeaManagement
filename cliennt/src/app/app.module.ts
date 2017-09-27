import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/map'
=======
import { FirstComponent } from './first/first.component';
<<<<<<< HEAD
import { ServerVueComponent } from './server-vue/server-vue.component';
=======
>>>>>>> 3d85b8838e6d8064ca7019af013f28806df71168
>>>>>>> a972bb83b2fc7e354b6e3091901c82a05f681f21

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ServerVueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
