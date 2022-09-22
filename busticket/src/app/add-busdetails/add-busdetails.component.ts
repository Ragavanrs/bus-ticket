import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusserviceService } from './busservice.service';

@Component({
  selector: 'app-add-busdetails',
  templateUrl: './add-busdetails.component.html',
  styleUrls: ['./add-busdetails.component.css']
})
export class AddBusdetailsComponent implements OnInit {

  constructor(private service:BusserviceService,private route:Router) { }

  confirmpassword='';
  userform={
    name :'',
    email:'',
    mobile:'',
    userpassword:'',
    userrole:'user'
  }
  busdetails;
  model: any = {};
  passwordvalid=false;
    ngOnInit(): void {
      this.getbusdetails();
    }
  onSubmit(form){
  console.log(form)
  this.service.createbusdetails(form).subscribe(() => console.log("User Added"));
  //this.route.navigate(['/updatebus'])
  this.getbusdetails();
  }
  getbusdetails(){
    this.service.getbusList().subscribe(Response=>{
     this.busdetails=Response;
    });
 }
 ondelete(form){
  this.service.deletebusdetails(form).subscribe(()=>{
    this.service.getbusList();
  })
  this.getbusdetails();
}
updateuser(form){
  
  this.service.tempData(form);
  console.log(this.service.tempbusdata)
  this.route.navigate(['/updatebus'])
}
refresh(){
  window.location.reload();
}
}
