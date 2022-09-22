import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDeleteRegistrationComponent } from './admin-delete-registration/admin-delete-registration.component';
import { AdminUpdateRegistrationComponent } from './admin-update-registration/admin-update-registration.component';
import { AddBusdetailsComponent } from './add-busdetails/add-busdetails.component';
import { UpdateBusdetailsComponent } from './update-busdetails/update-busdetails.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeDirective } from './homepage/home.directive';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { BookingorderComponent } from './bookingorder/bookingorder.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { ModifybookingComponent } from './modifybooking/modifybooking.component';
import { ViewbuscommentComponent } from './viewbuscomment/viewbuscomment.component';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    FrontpageComponent,
    HomepageComponent,
    AdminDeleteRegistrationComponent,
    AdminUpdateRegistrationComponent,
    AddBusdetailsComponent,
    UpdateBusdetailsComponent,
    ViewCommentsComponent,
    AddCommentsComponent,
    NavbarComponent,
    HomeDirective,
    BusdetailsComponent,
    BookingorderComponent,
    BookinghistoryComponent,
    ModifybookingComponent,
    ViewbuscommentComponent,
    PathnotfoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
