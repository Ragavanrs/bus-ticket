import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../user-registration/registration.service';

@Component({
  selector: 'app-admin-update-registration',
  templateUrl: './admin-update-registration.component.html',
  styleUrls: ['./admin-update-registration.component.css']
})
export class AdminUpdateRegistrationComponent implements OnInit {

  constructor(private service:RegistrationService,private route:Router,private router:ActivatedRoute) { }
  model: any = {};
  registrationid;
  updates:{
    registrationid: number,
    name:string,
    email:string,
    userrole:string,
  }
  value;
  passwordvalid=false;
  userrole:string;
  roles;
  ngOnInit(): void {
    this.roles=this.service.role;
    this.value=this.service.tempuserdata;
    console.log(this.value)
    this.router.queryParams.subscribe(data=>{
      this.registrationid=data["id"];
    })
  }
  sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}
  
async onupdate(form){
  console.log(form)
  this.service.updateuser(form).subscribe(()=>{
    console.log("user Updated");
  });
  this.route.navigate(['/adminupdate'],{
    queryParams:{
      id:this.registrationid
    }
  })
  //await this.sleep(3000);
  //console.log("hello")
  //this.route.navigate(['/adminupdate'])
  
 
}
 
}
