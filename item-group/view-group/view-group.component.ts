import { Component, OnInit } from '@angular/core';
import { ItemGroupService } from 'src/app/item-group.service';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {

  constructor(public serv:ItemGroupService) { }
  list:any=''

  ngOnInit(): void {
    this.getItemGroups()
  }

  getItemGroups()
  {
    this.serv.getGroupDetails().subscribe((data)=>
    {
      console.log(data);
      this.list=data
    })

  }




  delete(id:any)

  {
    this.serv.deleteGroupDetails(id).subscribe((data)=>{
      console.log(data);
      this.ngOnInit()
    })



  }

}
