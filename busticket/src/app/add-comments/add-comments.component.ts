import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {

  constructor(private route:Router,private router:ActivatedRoute,private service:CommentService) { }
  registrationid;
  busid;
  comment;
  addcomments= {
    registrationid:0,
    busid:0,
    comment:''
  }
   ngOnInit(): void {
    this.router.queryParams.subscribe(data=>{
      this.registrationid=data["id"];
    this.busid=data["busid"];
    console.log(this.busid)
    });
    
    }
    comments(addcomment){
      console.log(addcomment)
      this.addcomments.registrationid=this.registrationid;
      this.addcomments.busid=this.busid;
      this.addcomments.comment=addcomment.comment;

      this.service.createcomment(this.addcomments).subscribe(()=>
      console.log("comment added")
      
      )
      // this.route.navigate(['/bookinghistory'],{
      //   queryParams:{
      //     id:this.registrationid
      //   }
      // }
      // )
  }
  close(){
    this.route.navigate(['/bookinghistory'],{
      queryParams:{
        id:this.registrationid
      }
    }
    )
  }
}


