import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemGroupService } from 'src/app/item-group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

  constructor(public serv:ItemGroupService,public active:ActivatedRoute, public r1:Router) { }
 Id_global=''
 groupID=''
 groupName=''
 groupStatus=''
 timeStamp=''




  ngOnInit(): void {

this.para()


  }

  para()
  {
    this.active.params.subscribe((data)=>{
      console.log(data)
      this.Id_global=data['id'];
      this.getRecordById(this.Id_global)
    })
  }



  getRecordById(id:any)
  {
    let obj:any
    this.serv.getElementByID(id).subscribe((data)=>{
      obj=data
      this.groupID=obj.igId;
      this.groupName=obj.igName;
      this.groupStatus=obj.igStatus;
      this.timeStamp=obj.igTs


    })
  }


  postingUpdated(): void
  {
    const obj2=
    {
      "igId": this.Id_global,
      "igName":this.groupName,
      "igStatus":this.groupStatus,
      "igTs": this.timeStamp
    }
    this.serv.puttingUpdatedRecord(obj2,this.Id_global).subscribe((data)=>{
        console.log(data)


    })
    this.r1.navigate(['viewgroup'])



  
  }







}
