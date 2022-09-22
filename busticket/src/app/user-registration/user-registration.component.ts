import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  loading=false
  constructor(private service: RegistrationService,private route:Router) { }
  invalidemail=false;
confirmpassword='';
userform={
  name :'',
  email:'',
  mobile:'',
  userpassword:'',
  userrole:'user'
}
logindetails;
model: any = {};
passwordvalid=false;
  ngOnInit(): void {
    this.getuser();
  }
  getuser(){
    this.service.getUserList().subscribe(Response=>{
     this.logindetails=Response;
    });
 }
onSubmit(form){
  this.invalidemail=false;
console.log(form)
this.userform.email=form.email;
this.userform.mobile=form.mobile;
this.userform.name=form.name;
this.userform.userpassword=form.userpassword;
console.log(this.userform)
for(let detail of this.logindetails)
{if(form.email.match(detail.email))
  {
    this.invalidemail=true;
  }

}
if(!this.invalidemail){
if((form.userpassword)==(form.confirmpassword)){
  this.passwordvalid=false;
this.service.createUser(this.userform).subscribe(() => console.log("User Added"));
this.invalidemail=false;
}else{
this.passwordvalid=true
}
}}
refresh(){
  window.location.reload();
}
}
