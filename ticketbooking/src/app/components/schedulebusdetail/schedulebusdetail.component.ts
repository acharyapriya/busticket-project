
import {Component, OnInit, ViewChild } from '@angular/core';



import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Busschedule } from 'src/app/classes/busschedule';
import { OwnerdetailserviceService } from 'src/app/ownerdetailservice.service';

@Component({
  selector: 'app-schedulebusdetail',
  templateUrl: './schedulebusdetail.component.html',
  styleUrls: ['./schedulebusdetail.component.css']
})
export class SchedulebusdetailComponent implements OnInit {
  from!:String
  displayedColumns: string[] = ['Startingdate', 'name', 'weight', 'symbol','bookedseats'];
  
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  schedulebusdetail: any;
  available=new Busschedule();
 
  busId!: any;
  adminname!: any ;
  adminPassword!: string;
  AdminName!: string;
 
  BusDetail:any=[]
  BusSchedules:any=[]
  available_status!: String;
  seatsBoolean!:boolean;
 
  colorStatus!:boolean;
  route: any;
  busName: any;

   constructor(private ownerservice:OwnerdetailserviceService) { }

  ngOnInit(): void {
  
    this.busId=localStorage.getItem("travels")
    console.log(this.busId);
   this.ownerservice.Finddetailbyname(this.busId).subscribe((data)=>{
    this.BusDetail = data.bsdetail
  
      this.dataSource = new MatTableDataSource(data.bschedule) 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  
  })
 


  
 }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
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
  element.available_status = "Seats Full" 
   this.ownerservice.ownerbusdetail_status(scheduleID,element).subscribe((data)=>{
    alert("updated successfully")
    this.uploadcheck=scheduleID;
   
   })

  
  }

  


}

