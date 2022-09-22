import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusserviceService {

  tempbusdata;
  value:[];
  busdetails;
  constructor(private http: HttpClient) { }
  createbusdetails(bus){
    return this.http.post( " http://localhost:8080/busdetails " , bus);
  }
  getbusList(){
    return this.http.get("http://localhost:8080/busdetails");
  }
  updatebusdetails(bus){
    return this.http.put("http://localhost:8080/busdetails/" + bus.busid,bus);
  }
  deletebusdetails(bus){
    return this.http.delete("http://localhost:8080/busdetails/" + bus.busid, bus);
  }
  tempData(bus){
    this.tempbusdata = bus;
}
viewdetails(bus){
  this.value=[];
  this.value=bus;
  this.busdetails=this.value;
}

}
