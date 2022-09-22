import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusserviceService } from '../add-busdetails/busservice.service';
import { RegistrationService } from '../user-registration/registration.service';
import { LocationService } from './location.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  from:string;
  to:string;
  details;
  searchbus;
  searchbusList=[];
  constructor(private route: Router, private service: RegistrationService , private router: ActivatedRoute, private busservice:BusserviceService,private locationservice: LocationService) { }
  registrationdetails;
  location;
  values;
  isadmin=false;
  registrationid;
  busdetail;
  busvalue=[];
  ngOnInit(): void {
    this.getbus();
    this.getuser();
    this.getlocation();
    this.router.queryParams.subscribe(data=>{
      this.registrationid=data["id"];
    })
    console.log(this.registrationid);
   
  }
  viewcomments(comment){
    this.route.navigate(['/homepage/viewbuscomment'],{
      queryParams:{
        id:this.registrationid,
        busid:comment.busid
      }
    })
  }
  busdetails(bus){
console.log(bus)
this.busservice.viewdetails(bus);
console.log(this.busservice.busdetails)
this.route.navigate(['/homepage/busdetails'],{
  queryParams:{
    id:this.registrationid,
    busid:bus.busid
  }
})

}
getuser(){
    this.service.getUserList().subscribe(Response=>{
     this.registrationdetails=Response;
     this.checkadmin();
    });
   
 }
 getlocation(){
  this.locationservice.getlocationList().subscribe(Response=>{
   this.location=Response;
  
  });
 
}
 getbus(){
  this.busservice.getbusList().subscribe(Response=>{
   this.details=Response; 
   this.searchbus=Response;
   this.busdetail=Response;
  });
  
 
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
booknow(detail){
  this.busservice.viewdetails(detail);
  this.route.navigate(['/bookingorder'],{
    queryParams:{
      id:this.registrationid,
      busid:detail.busid
    }
  }) 
}
search(event){
  console.log(event.to)
  console.log("Search "+event.from);
  if(event.from != "") {
    console.log(this.searchbus)
    for(let bus of this.searchbus){
      if((event.from).match( 
      (bus.departure)) ){

       if((event.to).match(
      bus.arrival)){
    
        this.searchbusList.push(bus);
      }
    }
      }
    this.details = this.searchbusList;
    console.log(this.details);
    this.searchbusList=[];

}

}
}
