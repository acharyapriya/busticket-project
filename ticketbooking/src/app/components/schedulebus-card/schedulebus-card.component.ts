import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Busschedule } from 'src/app/classes/busschedule';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-schedulebus-card',
  templateUrl: './schedulebus-card.component.html',
  styleUrls: ['./schedulebus-card.component.css']
})
export class SchedulebusCardComponent implements OnInit,AfterViewInit {
  schedule_enable=true;
  Busschedule=new Busschedule();
  
  constructor(private adminservice:AdminserviceService, private router_:Router) { }
  ngAfterViewInit(): void {
    console.log(this.busName.nativeElement.value);

  }
schedulecard:any


  @ViewChild("bus_name")
  busName!: ElementRef;

active: string ="active"

  ngOnInit(): void {
    this.adminservice.getAllScheduledbs_detail().subscribe((data)=>{
      this.schedulecard=data;
      
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
  update_detail(scheduleID:string){
    this.adminservice.update_schedule(scheduleID,this.schedulecard).subscribe((data)=>{
      alert("updated")
      console.log("update")
        
     })
  }
}
