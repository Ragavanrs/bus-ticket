import { Component, OnInit } from '@angular/core';
import { CommentService } from '../add-comments/comment.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {
  commentlist;
  constructor(private service:CommentService) { }

  ngOnInit(): void {
    this.getcomments();
  }
  getcomments(){
    this.service.getcommentList().subscribe(Response=>{
    this.commentlist=Response;
    });
  }
  deletecomment(comment){
    this.service.deletecomment(comment).subscribe(()=>
    console.log("deleted successfully")
    )
  }
  refresh(){
    window.location.reload();
  }

}
