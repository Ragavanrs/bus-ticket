import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusserviceService } from '../add-busdetails/busservice.service';
import { LocationService } from '../homepage/location.service';
import { RegistrationService } from '../user-registration/registration.service';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookingorder',
  templateUrl: './bookingorder.component.html',
  styleUrls: ['./bookingorder.component.css']
})
export class BookingorderComponent implements OnInit {

  constructor(private route: Router , private service: RegistrationService , private router: ActivatedRoute, private busservice: BusserviceService, private locationservice: LocationService ,private bookingservice: BookingService) { }
busdetails;
seatsbooked=1;
fare;
date;
registrationid;
busid;
bookingorder={
  busid:0,
  registrationid:0,
  dateoftravel:'',
  seatsbooked: 0,
  fare : 0
}
  ngOnInit(): void {
  this.busdetails = this.busservice.busdetails;
  this.router.queryParams.subscribe(data=>{
    this.registrationid=data["id"];
    this.busid=data["busid"];
    console.log(this.registrationid)
    console.log(this.busid)
  })
  }

bookorder(detail){
console.log(detail)
this.bookingorder.registrationid=this.registrationid;
this.bookingorder.busid=this.busid;
this.bookingorder.dateoftravel=(detail.dateoftravel);
this.bookingorder.seatsbooked=detail.seatsbooked;
this.bookingorder.fare=detail.fare;
console.log(this.bookingorder)
this.bookingservice.createbookingorder(this.bookingorder).subscribe(() => console.log("order placed"));
this.busdetails.seatsavailable=this.busdetails.seatsavailable-this.bookingorder.seatsbooked;
this.busservice.updatebusdetails(this.busdetails).subscribe(()=>console.log("updated succesfully"))
this.route.navigate(['/bookinghistory'],{
  queryParams:{
    id:this.registrationid,
  }
})
}

}
