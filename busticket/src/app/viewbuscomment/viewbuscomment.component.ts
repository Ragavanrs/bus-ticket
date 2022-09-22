import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../add-comments/comment.service';

@Component({
  selector: 'app-viewbuscomment',
  templateUrl: './viewbuscomment.component.html',
  styleUrls: ['./viewbuscomment.component.css']
})
export class ViewbuscommentComponent implements OnInit {

  constructor(private service: CommentService,private route:Router,private router:ActivatedRoute) { }
  commentlist;
  registrationid;
  busid;
  ngOnInit(): void {
    this.getcomments();
    this.router.queryParams.subscribe(data=>{
      this.registrationid=data["id"];
      this.busid=data["busid"];
    })
  }
  getcomments(){
    this.service.getcommentList().subscribe(Response => {
    this.commentlist = Response;
    });
  }
  close(){
    this.route.navigate(['/homepage'],{
      queryParams:{
        id:this.registrationid,
      }
    })
  }
}
