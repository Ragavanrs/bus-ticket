import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RegistrationService } from '../user-registration/registration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router, private service: RegistrationService , private router: ActivatedRoute) { }
  registrationdetails;
  isadmin=false;
  registrationid;
  ngOnInit(): void {
    this.getuser();
    this.router.queryParams.subscribe(data=>{
      this.registrationid=data["id"];
    })
    console.log(this.registrationid);
   
  }
  getuser(){
    this.service.getUserList().subscribe(Response=>{
     this.registrationdetails=Response;
     this.checkadmin();
    });
   
 }
 home(){
  this.route.navigate(['/homepage'],{
    queryParams:{
      id:this.registrationid
    }
  })
 }
 checkadmin(){
      for(let user of this.registrationdetails){
        if(this.registrationid==user.registrationid)
        {
          if((user.userrole).match('admin')){
            this.isadmin=true;
            console.log("true")
          }
          else{
            this.isadmin=false;
          }
        }
      }
}
viewcomments(){
  this.route.navigate(['/viewcomment'],{
    queryParams:{
      id:this.registrationid
    }
  })
}
updateuser(){
  this.route.navigate(['/adminupdate'],{
    queryParams:{
      id:this.registrationid
    }
  })
 }
 addbus(){
  this.route.navigate(['/addbus'],{
    queryParams:{
      id:this.registrationid
    }
  })
 }
 bookinghistory(){
  this.route.navigate(['/bookinghistory'],{
    queryParams:{
      id:this.registrationid
    }
  })
 }
 updatebus(){
  this.route.navigate(['/updatebus'],{
    queryParams:{
      id:this.registrationid
    }
  }) 
 }
 logout(){
   this.route.navigate(['/']);
 }
}

