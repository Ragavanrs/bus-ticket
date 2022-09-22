import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
userlist;
tempuserdata;
role=['admin', 'user'];
  constructor(private http:HttpClient) { }
  createUser(user){
    return this.http.post("http://localhost:8080/registration", user);
  }
  getUserList(){
    return this.http.get("http://localhost:8080/registration");
  }
  updateuser(user){
    return this.http.put("http://localhost:8080/registration/" +user.registrationid,user);
  }
  deleteUser(user){
    return this.http.delete("http://localhost:8080/registration/"+user.registrationid,user);
  }
  tempData(user){
    this.tempuserdata = user;
}

}
