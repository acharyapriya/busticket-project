import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuslistComponent } from './buslist/buslist.component';
import { AdminpannelComponent } from './components/adminpannel/adminpannel.component';
import { BusdetailComponent } from './components/busdetail/busdetail.component';
import { LoginComponent } from './components/login/login.component';
import { OwnerspannelComponent } from './components/ownerspannel/ownerspannel.component';
import { RegisterComponent } from './components/register/register.component';
import { SudokoComponent } from './components/sudoko/sudoko.component';

const routes: Routes = [
  {path:'' ,component:SudokoComponent}, 
{path:'home' ,component:BuslistComponent},
{path: 'ownerpanel',component:OwnerspannelComponent},
{path:'adminpanel',component:AdminpannelComponent},
{path:'detail',component:BusdetailComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
