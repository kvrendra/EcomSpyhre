import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleServiceService } from 'src/app/role-service.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
  rolenameUpdate=''
  rolestatusUpdate=''
  constructor(private actRoute:ActivatedRoute, private router:Router,public s3:RoleServiceService) { }

  ngOnInit(): void {
    this.gettingDetailsByID()
  }

  roleUpdate(id:any)
  {

    this.s3.gettingObjById(id).subscribe(
      (myObj:any)=>
      {
        console.log(myObj);
        this.rolenameUpdate=myObj.arName;
        this.rolestatusUpdate=myObj.arStatus;
  })
  }




      gettingDetailsByID()
      {
        this.actRoute.params.subscribe((idData3:any)=>
        { console.log(idData3.id);
          let id=idData3.id;
          this.roleUpdate(id)



        })

      }

      postUpdatedRole()
      {

        this.actRoute.params.subscribe((idData4:any)=>
        {
          console.log(idData4.id);
          let id=idData4.id;
          const obj3=
          {
            "arId": id,
            "arName": this.rolenameUpdate,
            "arStatus": this.rolestatusUpdate,
            "arTs": "2022-06-08T10:02:48.323Z"
          }
          console.log(obj3)


        this.s3.updateRole(obj3,id).subscribe((res)=>{
          console.log(res);
        })
      })

      }
}
