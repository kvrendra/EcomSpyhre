import { Component, OnInit } from '@angular/core';
import { PriceDetailsService } from '../price-details.service';
import { ViewPriceDetailsComponent } from './view-price-details/view-price-details.component';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit {

  constructor(public serve:PriceDetailsService) { }

  ngOnInit(): void {
    
  }

 
}
