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
export class RoleServiceService {

  constructor(public http:HttpClient) { }




  gettingObjById(id:any)
  {
    return this.http.get('https://saapi.azaz.com/api/AdminRoles/'+id)
  }

  updateRole(obj:any,id:any)
  {
    return this.http.put('https://saapi.azaz.com/api/AdminRoles/'+id,obj,headersData)
  }
}
