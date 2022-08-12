import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ItemdetailService } from 'src/app/itemdetail.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
url:any;
im1:any=''
isDisplay="block";
selectImage:any;
public data:any;
 public date=new Date();
imageurl="https://saapi.azaz.com/"
itemform=new FormGroup({
  name:new FormControl(''),
  desc:new FormControl(''),
  status:new FormControl(''),
  imageURL:new FormControl(''),

})
  iedit: any;
  id: any;




  constructor( public api:ApiService,public item:ItemdetailService,
               public act:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.act.params.subscribe((data:any)=>{
      this.iedit=data.id;
      console.log(this.iedit)
    })
    this.item.getitem(this.iedit).subscribe((res:any)=>{
      console.log(res)
      this.im1=res.iImage

      this.itemform=new FormGroup({
        name:new FormControl(res['iName']),
        desc:new FormControl(res['iDesc']),
        status:new FormControl(res['iStatus']),
        imageURL:new FormControl(res['iImage'])

    })
  })
}
  changeFile(event:any){
    if(event.target.files && event.target.files[0]){
       var reader=new FileReader();
       reader.onload=(event:any)=>
       this.url=event.target.result;

       reader.readAsDataURL(event.target.files[0]);

         this.selectImage=event.target.files[0];
         this.isDisplay="none";




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

  // isDisplay()
  // {
  //   this.isDisplay="none"

  // }



  edit(){
    this.id=this.act.snapshot.params['id'];
    console.log(this.id)
    const obj={
      "iId": this.id,
      "iName": this.itemform.value.name,
      "iIgId": 1,
      "iDesc": this.itemform.value.desc,
      "iImage":this.imageurl+this.data.dbPath,
      "iStatus": this.itemform.value.status,
       "iTs": this.date
    }
    console.log(obj);
    this.item.edititem(this.iedit,obj).subscribe(res=>{
      alert('item updated successfully');
      this.router.navigate(['home']);
    })
  }

}
