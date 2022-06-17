import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuslistComponent } from './buslist/buslist.component';
import { AdminpannelComponent } from './components/adminpannel/adminpannel.component';
import { BusdetailComponent } from './components/busdetail/busdetail.component';
import { OwnerspannelComponent } from './components/ownerspannel/ownerspannel.component';

const routes: Routes = [
  
{path:'' ,component:BuslistComponent},
{path: 'ownerpanel',component:OwnerspannelComponent},
{path:'adminpanel',component:AdminpannelComponent},
{path:'detail',component:BusdetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
