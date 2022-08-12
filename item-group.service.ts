import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ItemGroupService {

  constructor(private http:HttpClient,) { }




  postingGroupDetails(obj:any)
  {   return this.http.post("https://saapi.azaz.com/api/ItemGroups",obj,headersData)

  }
  getGroupDetails()
  {
    return this.http.get("https://saapi.azaz.com/api/ItemGroups")
  }
  deleteGroupDetails(id:any)
  {
    return this.http.delete("https://saapi.azaz.com​/api/ItemGroups/"+id)
  }

  getElementByID(id:any)
  {
    return this.http.get("https://saapi.azaz.com​/api/ItemGroups/"+id)
  }
  puttingUpdatedRecord(obj:any,id:any)
  {
    return this.http.put("https://saapi.azaz.com​/api/ItemGroups/"+id,obj)
  }
}
