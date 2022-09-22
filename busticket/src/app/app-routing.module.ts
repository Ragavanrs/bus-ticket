import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDeleteRegistrationComponent } from './admin-delete-registration/admin-delete-registration.component';
import { AdminUpdateRegistrationComponent } from './admin-update-registration/admin-update-registration.component';
import { AddBusdetailsComponent } from './add-busdetails/add-busdetails.component';
import { UpdateBusdetailsComponent } from './update-busdetails/update-busdetails.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { BookingorderComponent } from './bookingorder/bookingorder.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { ModifybookingComponent } from './modifybooking/modifybooking.component';
import { ViewbuscommentComponent } from './viewbuscomment/viewbuscomment.component';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';


const routes: Routes = [
  {
    path: '' , component: UserLoginComponent
  },
  {
    path:'modifybooking',component:ModifybookingComponent
  },
  {
    path: 'bookingorder' , component: BookingorderComponent
  },
  {
    path: 'bookinghistory', component: BookinghistoryComponent,
    children:[
      {
        path: 'addcomment', component: AddCommentsComponent
      },
    ]
  },
  {
    path: 'navbar' , component: NavbarComponent
  },
  {
    path: 'login' , component: FrontpageComponent
  },
  {
    path: 'addbus', component: AddBusdetailsComponent
  },
  {
    path: 'updatebus', component: UpdateBusdetailsComponent
  },
  
  {
    path: 'viewcomment', component: ViewCommentsComponent
  },
  {
    path: 'adminupdate', component: AdminDeleteRegistrationComponent,
  },
  {
    path: 'updateuser', component: AdminUpdateRegistrationComponent
  },
  {
    path: 'registration', component: UserRegistrationComponent
  },
  {
    path: 'homepage', component: HomepageComponent,
    children: [
      {
        path: 'busdetails', component: BusdetailsComponent
      },
      {
        path:'viewbuscomment',component:ViewbuscommentComponent
      },
    ]
  },
  {
    path: '**', component: PathnotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
