import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }
  getUserList(){
    return this.http.get("http://localhost:8080/registration");
  }
  deleteUser(user){
    return this.http.delete("http://localhost:8080/registration/"+user.registrationid,user);
  }
}
