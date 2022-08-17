import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminOwnercredentialComponent } from './components/admin-ownercredential/admin-ownercredential.component';
import { AdminpannelComponent } from './components/adminpannel/adminpannel.component';
import { BusdetailComponent } from './components/busdetail/busdetail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OwnerspannelComponent } from './components/ownerspannel/ownerspannel.component';
import { RegisterComponent } from './components/register/register.component';
import { SchedulebusCardComponent } from './components/schedulebus-card/schedulebus-card.component';
import { SchedulebusdetailComponent } from './components/schedulebusdetail/schedulebusdetail.component';
import { SudokoComponent } from './components/sudoko/sudoko.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';

const routes: Routes = [
  // {path:'',component:QrGeneratorComponent},
  {path:'',component:HomepageComponent},
  {path:'sudoko' ,component:SudokoComponent}, 
{path:'register' ,component:RegisterComponent},
{path: 'ownerpanel',component:OwnerspannelComponent},
{path:'adminpanel',component:AdminpannelComponent},
{path:'detail',component:BusdetailComponent},
{path:'register',component:RegisterComponent},
{path:'adminscheduledcard',component:SchedulebusCardComponent},
{path:'schedule_ownercard',component:SchedulebusdetailComponent},
{path:'admin-owner-cre',component:AdminOwnercredentialComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
