import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Busdetail } from '../classes/busdetail';

@Injectable({
  providedIn: 'root'
})
export class OwnersserviceService {

  constructor(private http:HttpClient) { }
  baseurl = "http://localhost:8080"

  
  PostBusDetail(BusDetail:Busdetail):Observable<any>{
    return this.http.post<any>(`${this.baseurl}/entry/busdetail`,BusDetail)
  }
  getbusdetail():Observable<any>{
    return this.http.get<any>(`${this.baseurl}/getall/getbusdetail`)
  }

  getbusdetailbyId(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/busdetail/${id}`)
  }

  deletebusdetail(id:String):Observable<any>{
    console.log(`${this.baseurl}/deletedetail/${id}`)
    return this.http.delete<any>(`${this.baseurl}/deletedetail/${id}`)
  }
}