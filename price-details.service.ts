import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json;charset=utf-8',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class PriceDetailsService {
  public baseURL="https://saapi.azaz.com/api/ItemPriceDetails/";


  constructor(public http:HttpClient) { }

  postPriceDetailsData11(obj2:any)
  {
   //console.log('From Service')
    //console.log(obj2)
   // let newLocal = JSON.stringify(obj);
   // let abcd=this.obj

 return this.http.post("https://saapi.azaz.com/api/ItemPriceDetails",JSON.stringify(obj2),headersData);


  }
  viewPricesUsingService()
  {
    return this.http.get(this.baseURL)


  }
deleteByIDUsingService(id:any)
{
  //alert("Do you really Wanna delete?")
  return this.http.delete(this.baseURL+id)

}

getElementById(id:any)
{
  return this.http.get(this.baseURL+id)

}

editUsingService(id:any,obj:any)
{
  return this.http.put(this.baseURL+id,obj,headersData)
}


passingIDandDiscount(id:any)

{
  //console.log(id)
  return this.http.get('https://saapi.azaz.com​/api/ItemPrivilages/'+id)
}

}







