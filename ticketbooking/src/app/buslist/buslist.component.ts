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
  ngOnInit(): void {
  }
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
}
