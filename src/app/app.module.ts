import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import { InclusiveComponent } from './components/inclusive/inclusive.component';
import { ThingstocarryComponent } from './components/thingstocarry/thingstocarry.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { RegistrationComponent } from './components/registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    InclusiveComponent,
    ThingstocarryComponent,
    ContactComponent,
    FooterComponent,
    ActivitiesComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
