import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusserviceService } from '../add-busdetails/busservice.service';

@Component({
  selector: 'app-busdetails',
  templateUrl: './busdetails.component.html',
  styleUrls: ['./busdetails.component.css']
})
export class BusdetailsComponent implements OnInit {
busdetail;
registrationid;
busid=6;
details;
values;
  constructor(private route:Router,private service:BusserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(data=>{
      this.registrationid=data["id"];
      this.busid=data["busid"];
    })
    console.log(this.busid)
   this.values=this.service.busdetails;
   console.log(this.values)
  }
  close(){
    this.route.navigate(['/homepage'],{
      queryParams:{
        id:this.registrationid,
      }
    })
  }
  // getbus(){
  //   this.service.getbusList().subscribe(Response=>{
  //     this.busdetail=Response; 
  //   });
  //   console.log(this.busdetail)
  //  this.particularbus();
  // }
  // particularbus(){
  //   for(let bus of this.busdetail){
  //     console.log(bus)
  //     if(bus.busid == this.busid)
  //   {  this.values=bus
  //   console.log(this.details)
  //   }}
  //   console.log(this.details)
  // }
}