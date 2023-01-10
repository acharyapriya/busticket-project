import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Adminlogin } from 'src/app/classes/adminlogin';
import { Busschedule } from 'src/app/classes/busschedule';
import { Exportdata } from 'src/app/classes/exportdata';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';
import { Observable } from 'rxjs'; 
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-superadminregister',
  templateUrl: './superadminregister.component.html',
  styleUrls: ['./superadminregister.component.css']
})
export class SuperadminregisterComponent implements OnInit {
  adminresources!: any;
  busdetail!:any;
  exportdata=new Exportdata();
  excel:any;
  StartDate!:String
  ReachDate!:String;
  visibility!:boolean
  error!:string;
bschedule=new Busschedule();


displayedColumns : string[] = ['SNO', 'AdminName', 'RollBase','Option'];

dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;




  constructor(private adminservice:AdminserviceService,private owenerservice:OwnersserviceService) { 

 
  }
 
  
  ngOnInit(): void {
   

    this.adminservice.getadmindetail().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data) 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.adminservice.getbusdetails().subscribe((data)=>{
      this.busdetail=data;
      console.log(this.busdetail)
      
      
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  adminlogin=new Adminlogin();
  adminreg()
  {
    this.adminservice.adminregigsterdetail(this.adminlogin).subscribe((data)=>{
  
     console.log(data);
      alert("updated");
    })
   }


checkAdminId!:string;
  adminDetailEdit(id:string)
  {
    this.checkAdminId=id;
  }
  updateAdminid!:any
  adminDetailUpload(val:any,id:String)
  {
   
    this.adminservice.adminUpdateDetail(val,id).subscribe((data)=>{
       alert("successs")
       this.updateAdminid=id
    })
  }

  adminDelete(adminid:String)
  {
    this.adminservice.adminDelete(adminid).subscribe((data)=>{
      alert("deleted")
    })
  }


 exportAsXLSX1():void {  
    this.adminservice.exportAsExcelFile1(this.excel, 'sample'); 
    console.log(this.excel); 
  }

 getexportvalues() {  

    this.adminservice.exportAsExcelFile0(this.StartDate,this.ReachDate).subscribe((data)=>{
      this.adminservice.exportAsExcelFile1(data, 'sample'); 
      console.log(this.StartDate + "" + this.ReachDate)
      console.log(data)
      
    });
  }

  
}




  






 

 