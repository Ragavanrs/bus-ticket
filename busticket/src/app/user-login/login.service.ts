import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tempStudentData: any;

  constructor(private http:HttpClient) { }
  getUserList(){
    return this.http.get("http://localhost:8080/registration");
  }
  
  
}
