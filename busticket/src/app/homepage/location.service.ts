import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }
  locationdata;
  createlocation(place){
    return this.http.post( " http://localhost:8080/location " , place);
  }
  getlocationList(){
    return this.http.get("http://localhost:8080/location");
  }
  updatelocation(place){
    return this.http.put("http://localhost:8080/location/" + place.locationid,place);
  }
  deletelocation(place){
    return this.http.delete("http://localhost:8080/location/" + place.locationid, place);
  }
  tempData(place){
    this.locationdata = place;
}

}
