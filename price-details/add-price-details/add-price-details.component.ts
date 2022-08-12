
import { PercentPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PriceDetailsService } from 'src/app/price-details.service';


@Component({
  selector: 'app-add-price-details',
  templateUrl: './add-price-details.component.html',
  styleUrls: ['./add-price-details.component.css']
})
export class AddPriceDetailsComponent implements OnInit {

  date=new Date();
  public obj2:any;


  constructor(public dialog: MatDialog,public ser:PriceDetailsService,public fb:FormBuilder,private http:HttpClient,public act:ActivatedRoute, public router:Router) { }




  // spd=this.fb.group({
  //   ipdId:[''],
  //   ipdIId:[''],
  //   ipdMrp:[''],
  //   ipdMarketPrice:[''],
  //   ipdDiscount:[''],
  //   ipdStartDate:[''],
  //   ipdEndDate:[''],
  //   ipdStatus:[''],

  // })

public  prodID=''
public  prodDetailsID=''
 public mrp:any=''

 public discount?:any=''
 public marketprice=''
 public start=''
 public end=''
 public status=''









  ngOnInit(): void {
    //this.postPriceDetailsData()
    this.act.params.subscribe((data:any)=>{

      this.prodDetailsID=data.id;
      this.discount=Number(data.disc.slice(0,data.disc.length-1));
     // this.discount+=Number(this.discount)
      console.log(this.prodID)
      console.log(this.discount)



    //console.log(this.obj2)
    })


    this.ser.passingIDandDiscount(this.prodID).subscribe((dat1)=>{this.obj2=dat1})



    console.log(this.obj2)
  }


  ngOnChange():void{
    //this.postPriceDetailsData()

  }
  postPriceDetailsData(): void
  {



//     let obj1=
//     {
//   "ipdId":0,
//   "ipdIId":this.spd.value.ipdIId,
//   "ipdMrp": this.spd.value.ipdMrp,
//   "ipdMarketPrice":this.spd.value.ipdMarketPrice,
//   "ipdDiscount":this.spd.value.ipdDiscount,
//   "ipdStartDate":this.spd.value.ipdStartDate,
//   "ipdEndDate":this.spd.value.ipdEndDate,
//  "ipdStatus":this.spd.value.ipdStatus,
//  "ipdTs":this.date.getTime(),


//     }
// const obj1=
// {
// '"ipdId"':0,
// '"ipdIId"':this.spd.value.ipdIId,
// '"ipdMrp"': this.spd.value.ipdMrp,
// '"ipdMarketPrice"':this.spd.value.ipdMarketPrice,
// '"ipdDiscount"':this.spd.value.ipdDiscount,
// '"ipdStartDate"':this.spd.value.ipdStartDate,
// '"ipdEndDate"':this.spd.value.ipdEndDate,
// '"ipdStatus"':this.spd.value.ipdStatus,
// '"ipdTs"':this.date.getTime()


// }



const obj2=
{
"ipdId":0,
"ipdIId":this.prodDetailsID,
"ipdMrp": this.mrp,
"ipdMarketPrice":String(this.mrp-(this.mrp*this.discount/100)),
"ipdDiscount":this.discount,
"ipdStartDate":this.start,
"ipdEndDate":this.end,
"ipdStatus":this.status,
"ipdTs":this.date
}
// const obj_fin=
// {
//   obj2:{
//   },
// }

// const
// obj4={
// "ipdId": 0,
//  "ipdIId":this.prodDetailsID,
//  "ipdMrp": this.mrp,
//  "ipdMarketPrice": this.marketprice,
//  "ipdDiscount":this.discount,
//  "ipdStartDate": this.start,
//  "ipdEndDate":this.end,
//  "ipdStatus": this.status,
//  "ipdTs": this.date
// }

// const
// obj={
// "ipdId": 0,
//  "ipdIId":this.spd.value.ipdIId,
//  "ipdMrp": this.spd.value.ipdMrp,
//  "ipdMarketPrice": this.spd.value.ipdMarketPrice,
//  "ipdDiscount": this.spd.value.ipdDiscount,
//  "ipdStartDate": this.spd.value.ipdStartDate,
//  "ipdEndDate":this.spd.value.ipdEndDate,
//  "ipdStatus": this.spd.value.ipdStatus,
//  "ipdTs": this.date
// }

// priceCalulator(x,y)
// {
//   let mrp22:number=x;
//   let disss:number=y;
//   this.marketprice=(x)-x%y

// }

// getIDandDiscount()
// {

//   let allItems=this.http.get('https://saapi.azaz.com​/api/ItemPrivilages')
// }



console.log(obj2)
    this.ser. postPriceDetailsData11(obj2).subscribe(
      (data:any)=>{
      console.log(data)
      alert("One Record Added Succesfully")
    }


    );

  }





}




