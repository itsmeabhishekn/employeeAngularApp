import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';

const myRoute:Routes=[{"path":"",component:UserLoginComponent},
                      {"path":"admindash",component:AdminDashBoardComponent},
                      {"path":"user",component:UserLoginComponent},
                      {"path":"userprofile",component:UserProfileComponent},
                      {"path":"userregister",component:UserRegisterComponent},
                     ]

@NgModule({
  declarations: [
    AppComponent,
    NavUserComponent,
    NavAdminComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserProfileComponent,
    AdminDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
