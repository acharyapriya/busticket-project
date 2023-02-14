import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Busschedule } from 'src/app/classes/busschedule';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-schedulebus-card',
  templateUrl: './schedulebus-card.component.html',
  styleUrls: ['./schedulebus-card.component.css']
})
export class SchedulebusCardComponent implements OnInit {
  schedule_enable=true;
  Busschedule=new Busschedule();
  name!:string
  ScheduleDetailForm!:FormGroup
  adminData!:any;
 
  constructor(private adminservice:AdminserviceService, private router_:Router) { }
  
schedulecard:any=[]
BoolAdminData!:Boolean
  

active: string ="active"

  ngOnInit(): void {
    this.adminData=localStorage.getItem("admprev")

    if(this.adminData.rollbase =="Admin-Rw"){
      this.BoolAdminData = true;
    }else{
      this.BoolAdminData = false;
    }
    this.adminservice.getAllScheduledbs_detail().subscribe((data)=>{
      this.schedulecard=data;
       console.log(data)
    }
    
    )
    
  }

  schedule_delete(scheduleID:String)
  {
    this.adminservice.busschedule_delete(scheduleID).subscribe((data)=>{
      this.router_.navigate(["adminscheduledcard"]).then(()=>{
        window.location.reload()
      })
    })
    
  }
  sch_id!:string
  edit_enable(scheduleID:string)
  {
   this.schedule_enable = !this.schedule_enable
    this.sch_id = scheduleID

  }
  scheduleID!:string;
  update_detail(id:String,val:any){
    this.adminservice.update_schedule(id,val).subscribe((data)=>{
      this.router_.navigate(["admincard"]).then(()=>
      {
        window.location.reload()
      })
     })
  }
}
