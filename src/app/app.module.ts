import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Routes,RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEmpComponent } from './add-emp/add-emp.component';


const myRoute:Routes = [
{
  path:"",
  /* AdminLoginComponent */
  
}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarComponent,
    AddEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
