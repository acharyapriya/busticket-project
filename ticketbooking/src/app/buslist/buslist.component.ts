import { Component, OnInit } from '@angular/core';
import { Busschedule } from '../classes/busschedule';
import { AdminserviceService } from '../services/adminservice.service';
@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {

  constructor(private Adminservice:AdminserviceService) { }
  busschedule=new Busschedule();
  schedulelist:any=[];
  today= new Date();
  
  ngOnInit(): void {
     
    
  }
  register="Register"
  signup="Signup"
  click="Click"
  pin="pin"
  primary="btn btn-primary"
  secondary="btn btn-secondary"
  success="btn btn-success"
  danger="btn btn-danger"
  from!:string 
  to!:string 
  date!:string 
  showmusiccard=true;
  
  getbusschedule()
  {
    console.log(this.from,this.to,this.date);
    this.Adminservice.getbusschedule(this.from,this.to,this.date).subscribe((data)=>{
       this.schedulelist=data;
       this.showmusiccard=!this.showmusiccard;
    })
  }

  onclickregister(){
    console.log("clicked register")
  }
  onclick(){
    console.log("just a click")
  }
  onclickpin(){
    console.log("clicked pin")

  }
  onclicksignup(){
    console.log("clicked signup")
  }

}


