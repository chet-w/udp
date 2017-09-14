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
import { MenuComponent } from './menu.component/menu.component';
import { SamplesComponent } from './samples.component/samples.component';

import { BrochuresComponent } from './samples.component/brochures.component/brochures.component';
import { BusinessCardsComponent } from './samples.component/businesscards.component/businesscards.component';
import { CertificatesComponent } from './samples.component/certificates.component/certificates.component';
import { FlyersComponent } from './samples.component/flyers.component/flyers.component';
import { InvitationsComponent } from './samples.component/invitations.component/invitations.component';
import { LetterheadsComponent } from './samples.component/letterheads.component/letterheads.component';
import { LogosComponent } from './samples.component/logos.component/logos.component';
import { NewslettersComponent } from './samples.component/newsletters.component/newsletters.component';
import { PostersComponent } from './samples.component/posters.component/posters.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    MenuComponent,
    SamplesComponent,
    BrochuresComponent,
    BusinessCardsComponent,
    CertificatesComponent,
    FlyersComponent,
    InvitationsComponent,
    LetterheadsComponent,
    LogosComponent,
    NewslettersComponent,
    PostersComponent
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
