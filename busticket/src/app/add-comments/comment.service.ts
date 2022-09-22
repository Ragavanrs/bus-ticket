import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  commentdata;
  constructor(private http:HttpClient) { }
  createcomment(comment){
    return this.http.post( " http://localhost:8080/comment " , comment);
  }
  getcommentList(){
    return this.http.get("http://localhost:8080/comment");
  }
  updatecomment(comment){
    return this.http.put("http://localhost:8080/comment/" + comment.commentid,comment);
  }
  deletecomment(comment){
    return this.http.delete("http://localhost:8080/comment/" + comment.commentid, comment);
  }
  tempcomment(comment){
    this.commentdata = comment;
}
}
