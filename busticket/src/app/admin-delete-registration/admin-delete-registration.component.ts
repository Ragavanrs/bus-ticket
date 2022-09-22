import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../user-registration/registration.service';
import { DeleteService } from './delete.service';

@Component({
  selector: 'app-admin-delete-registration',
  templateUrl: './admin-delete-registration.component.html',
  styleUrls: ['./admin-delete-registration.component.css']
})
export class AdminDeleteRegistrationComponent implements OnInit {
registrationid;
  constructor(private service:RegistrationService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(data=>{
      this.registrationid=data["id"];
    })
    this.getuser();
   
  }
  logindetails;
  getuser(){
     this.service.getUserList().subscribe(Response=>{
      this.logindetails=Response;
     
     });
  }
ondelete(form){
  this.service.deleteUser(form).subscribe(()=>{
    this.service.getUserList();
  })
  this.getuser();
}
refresh(){
  window.location.reload();
}
updateuser(form){
  
  this.service.tempData(form);
  console.log(this.service.tempuserdata)
  this.route.navigate(['/updateuser'],{
    queryParams:{
      id:this.registrationid
    }

  })
}
}
