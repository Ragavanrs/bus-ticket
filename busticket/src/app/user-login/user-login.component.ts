import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email='';
  userpassword=''
  constructor(private service: LoginService,private route: Router) { }

  ngOnInit(): void {
    this.getuser();
    console.log(this.logindetails)
  }
  getuser(){
     this.service.getUserList().subscribe(Response=>{
      this.logindetails=Response;
     });
  }
logindetails;
validatelogin=false;
onSubmit(form){
for(let user of this.logindetails){
  console.log(user)
  console.log(form)
  if((user.email).match(form.email) ){
  if ((user.userpassword)==( form.password))
  {this.validatelogin= false;
  
    this.route.navigate(['/homepage'],{
      queryParams:{
        id:user.registrationid,
      }
    })
  }
  else
  {
    this.validatelogin=true;
  }
}
  else
  {
    this.validatelogin=true;
  }

}


}
}
