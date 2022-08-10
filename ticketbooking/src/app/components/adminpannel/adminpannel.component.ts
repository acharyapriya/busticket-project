import { Component, OnInit } from '@angular/core';
import { Busschedule } from 'src/app/classes/busschedule';
import {} from '@angular/forms'
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { OwnerspannelComponent } from '../ownerspannel/ownerspannel.component';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css']
})
export class AdminpannelComponent implements OnInit {

  constructor(private Adminservice:AdminserviceService,private ownerservice:OwnersserviceService) { }
  bschedule = new Busschedule()
  allbusdetail:any=[]
  stringdate:any;
   currentdate = new Date()
   fulldate:string | undefined
  ngOnInit(): void {
    this.getallbusdetail()
    const month=this.formatDate(this.currentdate.getMonth() +1) 
    const date = this.formatDate(this.currentdate.getDate())
    this.fulldate = `${this.currentdate.getFullYear()}-${month}-${date}T${this.currentdate.getHours()}:${this.currentdate.getMinutes()}`
   
  }
  private formatDate(nmbr: number): string {
    var date = nmbr + "";
    date = (date.length < 2) ? "0" + date : date;
    return date;
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
  onsubmit()
  {
    console.log("value",this.bschedule);
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
