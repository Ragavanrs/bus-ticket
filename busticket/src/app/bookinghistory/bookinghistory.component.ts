import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusserviceService } from '../add-busdetails/busservice.service';
import { BookingService } from '../bookingorder/booking.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  constructor(private bookingservice: BookingService,private router: ActivatedRoute,private route: Router,private busservice:BusserviceService) { }
  bookorder;
  registrationid;
  buslist;
  modifiedbus;
  ngOnInit(): void {
    this.router.queryParams.subscribe(data=>{
      this.registrationid=data["id"];
    });
      this.getbookinghistory();
      this.getbusdetails();

  }

  getbookinghistory() {
    this.bookingservice.getorderList().subscribe(Response=>{
      this.bookorder=Response;
     });
     console.log(this.bookorder)
  }
  getbusdetails() {
    this.busservice.getbusList().subscribe(Response=>{
      this.buslist=Response;
     });
     console.log(this.buslist)
  }
  cancelbooking(order){
    this.busmodify(order.busid)
    this.modifiedbus.seatsavailable=this.modifiedbus.seatsavailable+order.seatsbooked
    this.busservice.updatebusdetails(this.modifiedbus).subscribe(()=>console.log("bus seats modified"))
    this.bookingservice.deleteorder(order).subscribe(()=>{
      this.bookingservice.getorderList;
    })
    this.getbookinghistory();
  }
  busmodify(bus){
    for(let detail of this.buslist)
    {
      if(detail.busid==bus)
      this.modifiedbus=detail;
    }
  }
  modifyorder(booking){
this.bookingservice.temporder(booking);
this.route.navigate(['/modifybooking'],{
  queryParams:{
    id:this.registrationid,
  }
})

  }
  comment(comment){
    this.route.navigate(['/bookinghistory/addcomment'],{
      queryParams:{
        id:this.registrationid,
        busid:comment.busid
      }
    })
  }
  refresh(): void {
    window.location.reload();
}
}
