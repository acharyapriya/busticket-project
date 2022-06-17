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
  ngOnInit(): void {
    this.getallbusdetail()
   
  }
  
  getallbusdetail(){
    this.ownerservice.getbusdetail().subscribe((data)=>{
      this.allbusdetail=data    
    })
  }
  
  onsubmit()
  {
    console.log("value",this.bschedule);
    this.Adminservice. postbusschedule(this.bschedule).subscribe(
      (sch)=>{
        alert(" submited sucessfully")
      }
    )
  }

  
}
