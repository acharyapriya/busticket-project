
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Busschedule } from '../classes/busschedule';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

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


  

 

  exportAsExcelFile0(StartDate:String,ReachDate:String):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/excelexport/StartDate=${StartDate}/ReachDate=${ReachDate}`)
  }


   exportAsExcelFile1(excel: any, excelFileName: string): void {  
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(excel);
    console.log(worksheet)  
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };  
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });  
    this.saveAsExcelFile(excelBuffer, excelFileName);  
  }  
  private saveAsExcelFile(buffer: any, fileName: string): void {  
     const data: Blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});  
     FileSaver.saveAs(data, fileName+ '_export_.xlsx' );  
  }  
}
