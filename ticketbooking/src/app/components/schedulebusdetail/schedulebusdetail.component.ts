import { HttpClient } from '@angular/common/http';
import { AfterViewInit,Component, Input, OnInit, ViewChild } from '@angular/core';
// import { OwnersserviceService } from 'src/app/services/ownersservice.service';


import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Busschedule } from 'src/app/classes/busschedule';
import { OwnerdetailserviceService } from 'src/app/ownerdetailservice.service';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';
@Component({
  selector: 'app-schedulebusdetail',
  templateUrl: './schedulebusdetail.component.html',
  styleUrls: ['./schedulebusdetail.component.css']
})
export class SchedulebusdetailComponent implements OnInit, AfterViewInit {
  from!:String
  displayedColumns: string[] = ['Startingdate', 'name', 'weight', 'symbol','bookedseats'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  schedulebusdetail: any;
  available=new Busschedule();
 
  // Busdetail: any;
  busId!: any;
  adminname!: any ;
  adminPassword!: string;
  AdminName!: string;
 

  BusDetail:any=[]
  BusSchedules:any=[]
  available_status!: String;
   constructor(private ownerservice:OwnerdetailserviceService) { }
  ngOnInit(): void {
  
    this.busId=localStorage.getItem("travels")
    console.log(this.busId);
   this.ownerservice.Finddetailbyname(this.busId).subscribe((data)=>{
      console.log(data)
      this.BusDetail = data.bsdetail
      this.BusSchedules = data.bschedule
  
  })
 }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
      
  }

  checkid!:String;
  statuscheck(scheduleID:any)
  {
   this.checkid=scheduleID;
   console.log(scheduleID)
  }

  uploadcheck!:string;
  statusupload(scheduleID:any,element:any)
  {
   
   this.ownerservice.ownerbusdetail_status(scheduleID,element).subscribe((data)=>{
    alert("uodate")
    this.uploadcheck=scheduleID;
   
   })
  }
  


}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  bookedseats:String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',bookedseats:'0'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',bookedseats:'0'},

];
