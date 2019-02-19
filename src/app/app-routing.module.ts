import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'

const routes: Routes = [
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'',
    redirectTo:'/homepage',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
