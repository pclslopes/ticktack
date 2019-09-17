import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './components/login/login/login.component';
import { HomrComponent } from './components/home/home.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, HomrComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
