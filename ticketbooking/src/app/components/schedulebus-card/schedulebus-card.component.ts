import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-schedulebus-card',
  templateUrl: './schedulebus-card.component.html',
  styleUrls: ['./schedulebus-card.component.css']
})
export class SchedulebusCardComponent implements OnInit {
  schedule_enable=true;
  
  constructor(private adminservice:AdminserviceService, private router_:Router) { }
schedulecard:any


active: string ="active"

  ngOnInit(): void {
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
    console.log();
    
    this.adminservice.update_schedule(scheduleID,this.schedulecard).subscribe((data)=>{
     alert("updared")
         this.schedulecard=data;
         console.log("bjb",data)
       
    })
   

  }
  update_detail(scheduleID:string){

  }
}
