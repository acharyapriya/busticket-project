import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Busdetail } from './classes/busdetail';

@Injectable({
  providedIn: 'root'
})
export class OwnerdetailserviceService {

  constructor(private http:HttpClient) { }
  baseurl = "http://localhost:8080"
  FindAdminByName(AdminName:string):Observable<any>{
    return this.http.get(`${this.baseurl}/getadminlogin?adminname=${AdminName}`)
    
  }
  Finddetailbyname(busId:string):Observable<any>{
    return this.http.get(`${this.baseurl}/detail?busId=${busId}`)
    
  }
  loginowner(adminName:string,adminPassword:string):Observable<any>
  {
    return this.http.get(`${this.baseurl}/getadminlogin?adminname=${adminName}&adminpassword=${adminPassword}`)

  }
  ownerbusdetail_status(id:String,element:any)
  {
    return this.http.put(`${this.baseurl}/updateidschedule/${id}`,element)
  }
  
  }

