import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component/home.component';
import { AboutComponent } from './about.component/about.component';
import { ContactComponent } from './contact.component/contact.component';
import { ServicesComponent } from './services.component/services.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
