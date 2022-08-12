import { Component, OnInit } from '@angular/core';
import { ItemGroupService } from 'src/app/item-group.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  constructor(private serv:ItemGroupService) { }
  groupname=""
  groupstatus=''
  date=new Date()

  ngOnInit(): void {
  }


  sub1()
  {
    const obj=
    {
      "igId": 0,
      "igName":this.groupname,
      "igStatus":this.groupstatus,
      "igTs": this.date
    }
    this.serv.postingGroupDetails(obj).subscribe((data)=>{
      console.log(data);
      if(data)
      alert('Item Group Added')
    })
  }

}
