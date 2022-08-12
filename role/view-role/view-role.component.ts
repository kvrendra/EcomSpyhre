import { Component, OnInit } from '@angular/core';
import { LoginDetailsService } from 'src/login-details.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {
public roles:any
  constructor(private serveCall:LoginDetailsService) { }

  ngOnInit(): void {
    this.viewRoles()
  }

  deleteById(id:any)
  {
   console.log(id)
    this.serveCall.deleteUsingService(id).subscribe((del:any)=>
    {
      console.log(del);
      this.viewRoles();

    })

  }



  viewRoles()
  {
    let t1=new Date().getTime()
    let dateObj = new Date(t1 * 1000);
    let utcString = dateObj.toUTCString();
console.log(utcString)
  this.serveCall.listOfRoles().subscribe((rol)=>{
     this.roles=rol
     //console.log(rol)



    })

  }

}
