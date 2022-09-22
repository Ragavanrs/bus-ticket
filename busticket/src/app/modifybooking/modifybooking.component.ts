import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusserviceService } from '../add-busdetails/busservice.service';
import { BookingService } from '../bookingorder/booking.service';
import { LocationService } from '../homepage/location.service';
import { RegistrationService } from '../user-registration/registration.service';

@Component({
  selector: 'app-modifybooking',
  templateUrl: './modifybooking.component.html',
  styleUrls: ['./modifybooking.component.css']
})
export class ModifybookingComponent implements OnInit {

  constructor(private route: Router , private service: RegistrationService , private router: ActivatedRoute, private busservice: BusserviceService, private locationservice: LocationService ,private bookingservice: BookingService) { }
bookorder;
registrationid;
bookingorder={
  sno:0,
  busid:0,
  registrationid:0,
  dateoftravel:'',
  seatsbooked: 0,
  fare : 0
}
fare;
buslist;
modifiedbus;
  ngOnInit(): void {
    this.bookorder=this.bookingservice.bookingdata;
    this.router.queryParams.subscribe(data=>{
      this.registrationid=data["id"];
    });
this.fare=(this.bookorder.fare / this.bookorder.seatsbooked);
this.getbuslist();
  }
  getbuslist(){
    this.busservice.getbusList().subscribe(Response=>{
      this.buslist=Response;
    });
  }
  busmodify(bus){
    for(let detail of this.buslist)
    {
      if(detail.busid==bus)
      this.modifiedbus=detail;
    }
  }
bookmodify(ticket) {
  this.busmodify(this.bookorder.busid);
  this.bookingorder.sno=this.bookorder.sno;
  this.bookingorder.registrationid=this.registrationid;
this.bookingorder.busid=this.bookorder.busid;
this.bookingorder.dateoftravel=(ticket.dateoftravel);
this.bookingorder.seatsbooked=ticket.seatsbooked;
this.bookingorder.fare=ticket.fare;
console.log(this.modifiedbus);
 this.modifiedbus.seatsavailable=(this.modifiedbus.seatsavailable)+( (this.bookorder.seatsbooked)-(this.bookingorder.seatsbooked) );

this.busservice.updatebusdetails(this.modifiedbus).subscribe(()=>console.log("seats available is modified"))
  this.bookingservice.updateorder(this.bookingorder).subscribe(()=>{
    console.log("order Updated");
  });
this.route.navigate(['/bookinghistory'],{
  queryParams:{
    id:this.registrationid,
  }
})
} 
close(){
  this.route.navigate(['/bookinghistory'],{
    queryParams:{
      id:this.registrationid,
    }
  })
}
}
