import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/classes/loginmodel/login';

@Injectable({
  providedIn: 'root'
})
export class UsercredentialsService {

  constructor(private http:HttpClient) { }
  baseurl = "http://localhost:8080"

  postusercredential(login:Login):Observable<any>
  {
    return this.http.post<any>(`${this.baseurl}/login`,login)
  }

}
