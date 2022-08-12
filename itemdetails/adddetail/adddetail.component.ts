import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Validators } from '@angular/forms';
import { ItemdetailService } from 'src/app/itemdetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddetail',
  templateUrl: './adddetail.component.html',
  styleUrls: ['./adddetail.component.css']
})
export class AdddetailComponent implements OnInit {
  url: any;
  selectImage: any;
   data: any =[];
  // fileData:File=null;
  // uploadfilename: any='';
  // previewurl:any=null;
  // formData:any
  public date=new Date();
  imageurl="https://saapi.azaz.com/"
  constructor(public api:ApiService, public fb:FormBuilder,public item:ItemdetailService ,public r2:Router) { }

  ngOnInit(): void {}

  selectFile(event:any){
    if(event.target.files && event.target.files[0]){
       var reader=new FileReader();
       reader.onload=(event:any)=>
       this.url=event.target.result;

       reader.readAsDataURL(event.target.files[0]);

         this.selectImage=event.target.files[0];


    }
    this.upload();
  }
  upload(){
    this.api.upload(this.selectImage).subscribe((res:any)=>{

     this.data=res
     console.log(this.data);
     alert('uploaded successfully')
    })

  }


  itemform=this.fb.group({
    itemname:['',Validators.required],
    itemDesc:['',Validators.required],
    itemstatus:['',Validators.required],
    itemimage:['',Validators.required]
  })
  items(){
    const obj=
    {
      "iId": 0,
      "iName":this.itemform.value.itemname,
      "iIgId":1,
      "iDesc":this.itemform.value.itemDesc,
      "iImage":this.imageurl+this.data.dbPath,
      "iStatus":this.itemform.value.itemstatus,
       "iTs": this.date
    }
    console.log (obj)

    this.item.additem(obj).subscribe((data:any)=>{
      console.log(data)

      if(data)
      {
        alert('Add Item')
      }
      else{
        alert('already add')
      }
      this.r2.navigate(['viewitem'])

    })

  }
  // onselectfile(event: any){
  //   if(event.target.files &&event.target.files[0]){
  //      var Reader=new FileReader();
  //     Reader.onload=(e:any)=>this.url=e.target.result
  //     Reader.readAsDataURL(event.target.files[0]);
  //     this.selectdImage=event.target.files[0];
  //   }
  //   }
}
