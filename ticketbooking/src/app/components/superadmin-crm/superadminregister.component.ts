import { Component, Input, OnInit } from '@angular/core';
import { Adminlogin } from 'src/app/classes/adminlogin';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-superadminregister',
  templateUrl: './superadminregister.component.html',
  styleUrls: ['./superadminregister.component.css']
})
export class SuperadminregisterComponent implements OnInit {
  adminresources!: any;
  busdetail!:any;


  constructor(private adminservice:AdminserviceService) { }
 
  ngOnInit(): void {

    this.adminservice.getadmindetail().subscribe((data)=>{
      this.adminresources=data;
      console.log(this.adminresources);
    })
    this.adminservice.getbusdetails().subscribe((data)=>{
      this.busdetail=data;
      
    })
  }
  adminlogin=new Adminlogin();
  adminreg()
  {
    this.adminservice.adminregigsterdetail(this.adminlogin).subscribe((data)=>{
  
     console.log(data);
      alert("updared");
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

}
