import { Component, OnInit ,NgModule} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemdetailService } from '../itemdetail.service';
import { PriceDetailsService } from '../price-details.service';
import { AddPriceDetailsComponent } from '../price-details/add-price-details/add-price-details.component';
import { ViewPriceDetailsComponent } from '../price-details/view-price-details/view-price-details.component';
import { AddprvgComponent } from '../privilage/addprvg/addprvg.component';
import { AddRoleComponent } from '../role/add-role/add-role.component';
import { EditRoleComponent } from '../role/edit-role/edit-role.component';

import { ViewRoleComponent } from '../role/view-role/view-role.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  i5=[];
 arrr=[];
 currentstate=true;
  styledp='none'
  styledp1='block'
  styledpSort='none'
  cartItemsDisplay='none'
  single='none'
  groupId:any
 cartArray=[]
// cartArray=[]
  filtereditems:any
  searchValue:any
  singleProduct:any=[]
  value:any
  display1:any=[] //for single product display object from single obj from  i6 singleProductDisplay()
  i4:any; //i4 will contain the details of iIgId and IName which are combined with I4 data later here  i.iId
  i7:any;
  i6:any ;// will contain the price details and id from view-price detail component using service  j.ipdIId  {{j.ipdMrp}} {{j.ipdMarketPrice}}
 // groupToDisplay='block';
  constructor(public dialog: MatDialog , public serv:ItemdetailService,public v3:PriceDetailsService ) { }


ngOnInit(): void {
  this.cartArray=JSON.parse(localStorage.getItem('array'))



    this.serv.viewitem().subscribe((data)=>{
      this.i4=data;
     console.log(this.i4);

    })


    let priceDetails=this.v3.viewPricesUsingService().subscribe((priceandid)=>{
      this.i6=priceandid;
      console.log(this.i6);




      // this.i6.forEach((this.i6)
      // {
      //   console.log(this.i6)
      // });
    //  console.log(this.i6)



    })
  //  let obj66={...this.i4,...this.i6};
  //   console.log(obj66)

  //localStorage.setItem('test', '1');
 // alert( localStorage.getItem('test') ); // 1







    // for(let k=0;k<=this.i6.length;k++)
    // {
    //   for(let h=0;h<=this.i4.length;h++)
    //   {

    //   }
    // }

    // <div class="col-2" *ngFor="let i of i4">
    //   <div *ngFor="let j of i6">

    //     <div *ngIf="i.iId==j.ipdIId">


    // localStorage.removeItem("array")


  }


  openDialog() {
    this.dialog.open(AddRoleComponent);}

    openDialog2() {
      this.dialog.open(EditRoleComponent);}

      openDialogForAddPrice()

      {
        this.dialog.open(AddPriceDetailsComponent);
      }

      redirectToView()
      {
        this.dialog.open(ViewPriceDetailsComponent)

      }
      open(){
        this.dialog.open(AddprvgComponent)

      }
openNav()
{
  document.getElementById("mySidenav").style.width = "250px";
}

 closeNav()
  {
  document.getElementById("mySidenav").style.width = "0";
}


filterdisp(id:any)
{

  this.styledp1='none';
  this.styledp='block';
  this.styledpSort='none'
  this.cartItemsDisplay='none'

  this.groupId=id
   this.filtereditems=this.i4.filter((x:any)=>x.iIgId==this.groupId);
     //console.log(this.filtereditems)
 this.i6.filter((y:any)=>y.ipdIId==this.groupId)




  // for(let i=0;i<=this.i4.length;i++)
  // {
  //   if(this.i4[i].iIgId==this.groupId)
  //   {
  //     //console.log(this.i4[i])
  //     this.arrr.push(this.i4[i])

  //   }

  // }


}
// onSubmit($event)
// {

//   if(this.searchValue.length >0)
//   {
//     this.searchValue
//   }
// }
singleProductDisplay(obj2:any)
{
 // console.log(obj2)
  this.styledp1='none'
  this.styledp='none'
  this.styledpSort='none'
  this.single='block'
  this.cartItemsDisplay='none'

 // console.log(obj2)
  this.singleProduct=obj2
  console.log(this.singleProduct)

   this.i6.forEach(res=>{
     if(res.ipdIId==obj2.iId){
        console.log(res)
        this.display1=res;
     }
   })


  }



backshop()
  {

    this.styledp1='block'
    this.styledp='none'
    this.styledpSort='none'
    this.single='none'
    this.cartItemsDisplay='none'
  }

asendingSort()

{
  this.styledp1='none'
  this.styledp='none'
  this.single='none'
  this.cartItemsDisplay='none'

  this.styledpSort='block'

            if(this.currentstate)
            {

            this.i6.sort(function(a,b){
              return a.ipdMrp-b.ipdMrp;
            });
            this.filtereditems=this.i6
            this.currentstate=false;



          console.log(this.filtereditems)
            }

            else
            if(!this.currentstate)
            {

            this.i6.sort(function(a,b){
              return b.ipdMrp-a.ipdMrp;
            });
            this.filtereditems=this.i6
            this.currentstate=true;

          // console.log(this.filtereditems)
            }

}



addItemsToCart(id:any)
{
  this.cartArray.push(id)
  //console.log(this.cartArray.length)
  //console.log(this.cartArray)

  localStorage.setItem("array ",JSON.stringify(this.cartArray))

  //console.log(JSON.parse(localStorage.getItem('array')))
}


showCart()
{
  this.styledp1='none'
  this.styledp='none'
  this.single='none'
  this.styledpSort='none'
  this.cartItemsDisplay='block'

}


// desendingSort()
// {
//   this.styledp='none'
//   this.styledp1='none'
//   this.styledpSort='block'
//   this.i6.sort(function(a,b){
//     return b.ipdMrp-a.ipdMrp;
//   });
//   this.filtereditems=this.i6
//   console.log(this.filtereditems)

// }

deleteFromCart(id:any)
{
  let deletingItem=id
  let arrayFromLocalStorage=JSON.parse(localStorage.getItem("array"))
 // console.log(arrayFromLocalStorage)
 //console.log(deletingItem)

 for(let i=0;i<arrayFromLocalStorage.length;i++)
 {
  if(arrayFromLocalStorage[i]==deletingItem)
  {
    arrayFromLocalStorage.splice(i,1)
    i--;
    console.log(arrayFromLocalStorage)
   break

  }
  //break;




 }
 localStorage.setItem("array",JSON.stringify(arrayFromLocalStorage))
this.cartArray=JSON.parse(localStorage.getItem('array'))





}












}
