import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuslistComponent } from './buslist/buslist.component';

import { OwnerspannelComponent } from './components/ownerspannel/ownerspannel.component';
import { AdminpannelComponent } from './components/adminpannel/adminpannel.component';

import {HttpClientModule} from "@angular/common/http";
import { BusdetailComponent } from './components/busdetail/busdetail.component';
import { SchedulebusdetailComponent } from './components/schedulebusdetail/schedulebusdetail.component';
import { NavabarComponent } from './components/navabar/navabar.component'

@NgModule({
  declarations: [
    AppComponent,
    BuslistComponent,
    OwnerspannelComponent,
    AdminpannelComponent,
    BusdetailComponent,
    SchedulebusdetailComponent,
    NavabarComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
