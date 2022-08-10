import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OwnerspannelComponent } from './components/ownerspannel/ownerspannel.component';
import { AdminpannelComponent } from './components/adminpannel/adminpannel.component';

import {HttpClientModule} from "@angular/common/http";
import { BusdetailComponent } from './components/busdetail/busdetail.component';
import { SchedulebusdetailComponent } from './components/schedulebusdetail/schedulebusdetail.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BuscardlistComponent } from './components/buscardlist/buscardlist.component';
import { ButttonComponent } from './components/buttton/buttton.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SudokoComponent } from './components/sudoko/sudoko.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
// import { QRCodeModule } from 'angularx-qrcode';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    OwnerspannelComponent,
    AdminpannelComponent,
    BusdetailComponent,
    SchedulebusdetailComponent,
    NavabarComponent,
    RegisterComponent,
    LoginComponent,
    BuscardlistComponent,
    ButttonComponent,
    PaymentComponent,
    SudokoComponent,
    QrGeneratorComponent,
    HomepageComponent,
],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
