
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Busschedule } from '../classes/busschedule';



@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
  baseurl = "http://localhost:8082"

  postbusschedule(Busschedule:Busschedule):Observable<any>
  {
    return this.http.post<any>(`${this.baseurl}/busschedule`,Busschedule)
  }
  
}
