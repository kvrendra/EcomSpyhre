import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginDetailsService } from 'src/login-details.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  rolename=""
  rolestatus=""
  constructor(private servicecall:LoginDetailsService ,private http:HttpClient) { }

  ngOnInit(): void {
  }

  rolesub()
  {
    const obj={
    
    
      arId: 0,
      arName: this.rolename,
      arStatus: this.rolestatus,
      arTs: "2022-06-08T10:01:33.095Z"
    


  }

  //  let time=new Date()
   // console.log()

   // console.log(time.getTime())
    // console.log(this.rolename)
    // console.log(this.rolestatus)
    // this.servicecall.http.subscribe().rolesubmit(this.rolesname,this.rolestatud)
 this.servicecall.rolesubmit(obj).subscribe((data:any)=>{console.log(data)} )

  }

}
