import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
bookingdata;
  constructor(private http:HttpClient) { }
  createbookingorder(booking){
    return this.http.post( " http://localhost:8080/booking " , booking);
  }
  getorderList(){
    return this.http.get("http://localhost:8080/booking");
  }
  updateorder(booking){
    return this.http.put("http://localhost:8080/booking/" + booking.sno,booking);
  }
  deleteorder(booking){
    return this.http.delete("http://localhost:8080/booking/" + booking.sno, booking);
  }
  temporder(booking){
    this.bookingdata = booking;
}
}
