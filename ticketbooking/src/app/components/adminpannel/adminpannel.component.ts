import { Component, OnInit } from '@angular/core';
import { Busschedule } from 'src/app/classes/busschedule';
import {} from '@angular/forms'
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { OwnerspannelComponent } from '../ownerspannel/ownerspannel.component';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css']
})
export class AdminpannelComponent implements OnInit {

  constructor(private Adminservice:AdminserviceService,private ownerservice:OwnersserviceService) { }
  bschedule = new Busschedule()
  allbusdetail:any=[]
  currentdate = new Date()
  ngOnInit(): void {
    this.getallbusdetail()
  }
  
  selectedTeam:String ="";
  values!:String;
  getallbusdetail(){
    this.ownerservice.getbusdetail().subscribe((data)=>{
      this.allbusdetail=data    
    })
  }
  // selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
	}
  datepipe!:DatePipe;
  onsubmit()
  {
    console.log("value",this.bschedule.startingTime);
    const finaldate = this.datepipe.transform(this.bschedule.startingTime,"yyyy-MM-DD HH:mm") 
    console.log(finaldate)
    this.Adminservice.postbusschedule(this.bschedule).subscribe(
      (sch)=>{
        alert(" submited sucessfully")
      }
    )
  
  }
  specificBusdetail:any=[]
 ToOptions:any=[];

 onbusname(data:any)
 {
  this.ownerservice.getbusdetailbyId(data).subscribe((data)=>{
    this.specificBusdetail=data.coverage 
  })

 }

 changeOfOptions(data:any){
  
  if(data){
     this.ToOptions=[]
    for(var i in this.specificBusdetail){
      if(this.specificBusdetail[i] != data){
        const revisedData = this.specificBusdetail[i]
        this.ToOptions.push(revisedData)
      }
    }
  }
   
 }
  
}
