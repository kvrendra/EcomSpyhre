import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { PriceDetailsService } from 'src/app/price-details.service';

@Component({
  selector: 'app-view-price-details',
  templateUrl: './view-price-details.component.html',
  styleUrls: ['./view-price-details.component.css']
})
export class ViewPriceDetailsComponent implements OnInit,AfterViewChecked {

  public viewPriceData: any
  

  constructor(public serve:PriceDetailsService) { }
  ngAfterViewChecked(): void {
    //this.viewPrices()
  }

  ngOnInit(): void {
    this.viewPrices()
}
ngOnChanges()
{
  this.viewPrices()
}

  ngDoCheck()
  {
   // this.viewPrices()
  }
  ngAfterContentCHecked(): void
  {
    this.viewPrices()
  }

  viewPrices()
  { 
    this.serve.viewPricesUsingService().subscribe((data22:any)=>{
      console.log(data22);
      this.viewPriceData=data22;
    })

  }


  deleteByID(id:any)
  {
    //alert("Do you wanna delete this record?")
     


    this.serve.deleteByIDUsingService(id).subscribe((data:any)=>{console.log(data);
      this.ngOnInit()
    alert('Record Deleted Successfully')})
    //this.viewPrices()
    //this.viewPrices()

  }

 



}
