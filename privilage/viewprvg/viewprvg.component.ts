import { Component, OnInit } from '@angular/core';
import {PrivilageService } from 'src/app/privilage.service';

@Component({
  selector: 'app-viewprvg',
  templateUrl: './viewprvg.component.html',
  styleUrls: ['./viewprvg.component.css']
})
export class ViewprvgComponent implements OnInit {
  data: any;
  searchText:string='';
  constructor(private apiservice:PrivilageService) { }

  ngOnInit(): void {
   this.ViewPrvg();
  }

  ViewPrvg(){
    this.apiservice.viewpvg()
    .subscribe(res=>{
      console.log(res);
      this.data=res;
    })
  }
  DeletePrvg(res:any){
    console.log(res)
    this.apiservice.delpvg(res)
    .subscribe(res=>{
      alert('You Want to Delete')
     this.ViewPrvg();
    })

  }
}
