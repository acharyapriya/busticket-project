
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Busschedule } from '../classes/busschedule';



@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
  baseurl = "http://localhost:8080"

  postbusschedule(Busschedule:Busschedule):Observable<any>
  {
    return this.http.post<any>(`${this.baseurl}/busschedule`,Busschedule)
  }

  getbusschedule(from:string,to:string,date:String):Observable<any>
  {
    return this.http.get<any>(`${this.baseurl}/from=${from}/to=${to}/${date}`)
  }
  getAllScheduledbs_detail():Observable<any>{
    return this.http.get<any>(`${this.baseurl}/getbusschedule`)
  }

  busschedule_delete(id:String){
    return this.http.delete<any>(`${this.baseurl}/deleteschedule/${id}`)
  }

  update_schedule(id:String,Busschedule:Busschedule):Observable<any>
  {
   return this.http.put<any>(`${this.baseurl}/updateidschedule/${id}`,Busschedule)
   
  }

  adminregigsterdetail(adminlogin:any):Observable<any>
  {

    return this.http.post<any>(`${this.baseurl}/adminregister`,adminlogin)
  }

  getadmindetail():Observable<any>
  {
    return this.http.get<any>(`${this.baseurl}/getadmin`)
  }


  getbusdetails():Observable<any>
  {
    return this.http.get<any>(`${this.baseurl}/buscount`)
  }

  adminUpdateDetail(id:String,val:any):Observable<any>
  {
    return this.http.put<any>(`${this.baseurl}/detailAdminupdate/${id}`,val)
  }
}
