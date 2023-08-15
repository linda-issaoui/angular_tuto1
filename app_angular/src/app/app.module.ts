import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfilComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [{
    provide:LocationStrategy,useClass:HashLocationStrategy
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
