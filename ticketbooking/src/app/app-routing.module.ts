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
import { SuperadminregisterComponent } from './components/superadmin-crm/superadminregister.component';



const routes: Routes = [
  
  {path:'',component:HomepageComponent},
  
{path:'register' ,component:RegisterComponent},
{path: 'ownerpanel',component:OwnerspannelComponent},
{path:'adminpanel',component:AdminpannelComponent},
{path:'detail',component:BusdetailComponent},
{path:'register',component:RegisterComponent},
{path:'admincard',component:SchedulebusCardComponent},
{path:'ownercard',component:SchedulebusdetailComponent},
{path:'admin-owner-cre',component:AdminOwnercredentialComponent},
{path:'superadmin-crm',component:SuperadminregisterComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
