import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusserviceService } from '../add-busdetails/busservice.service';

@Component({
  selector: 'app-update-busdetails',
  templateUrl: './update-busdetails.component.html',
  styleUrls: ['./update-busdetails.component.css']
})
export class UpdateBusdetailsComponent implements OnInit {

  constructor(private service:BusserviceService,private route:Router) { }
model;
  ngOnInit(): void {
this.model=this.service.tempbusdata;
  }
onSubmit(form){
  console.log(form)
  this.service.updatebusdetails(form).subscribe(()=>{
    console.log("user Updated");
  });
}
}
