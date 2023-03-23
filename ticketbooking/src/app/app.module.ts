import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OwnerspannelComponent } from './components/ownerspannel/ownerspannel.component';
import { AdminpannelComponent } from './components/adminpannel/adminpannel.component';

import {HttpClientModule} from "@angular/common/http";

import { SchedulebusdetailComponent } from './components/schedulebusdetail/schedulebusdetail.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { RegisterComponent } from './components/register/register.component';
import { BuscardlistComponent } from './components/buscardlist/buscardlist.component';
import { ButttonComponent } from './components/buttton/buttton.component';
import { PaymentComponent } from './components/payment/payment.component';

// import { QRCodeModule } from 'angularx-qrcode';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DatePipe } from '@angular/common';
import {  NgxPasswordStrengthMeterModule } from 'ngx-password-strength-meter';
import { SchedulebusCardComponent } from './components/schedulebus-card/schedulebus-card.component';

import { AdminOwnercredentialComponent } from './components/admin-ownercredential/admin-ownercredential.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SuperadminregisterComponent } from './components/superadmin-crm/superadminregister.component';
import { ButtonComponent } from './components/button/button.component';
import { OwnersserviceService } from './services/ownersservice.service';
import { TickseatselectionComponent } from './components/tickseatselection/tickseatselection.component';



@NgModule({
  declarations: [
    AppComponent,
    OwnerspannelComponent,
    AdminpannelComponent,
  
    SchedulebusdetailComponent,
    NavabarComponent,
    RegisterComponent,
    BuscardlistComponent,
    ButttonComponent,
    PaymentComponent,
    
    HomepageComponent,
    SchedulebusCardComponent,
    AdminOwnercredentialComponent,
    SuperadminregisterComponent,
    ButtonComponent,
    TickseatselectionComponent,
 
],
  imports: [
   
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,HttpClientModule,NgxQRCodeModule,NgxPasswordStrengthMeterModule, NoopAnimationsModule, MaterialModule
  ],
  providers: [DatePipe],

  bootstrap: [AppComponent],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
