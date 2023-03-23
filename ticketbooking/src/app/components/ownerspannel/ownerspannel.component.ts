import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Busdetail } from 'src/app/classes/busdetail';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';

@Component({
  selector: 'app-ownerspannel',
  templateUrl: './ownerspannel.component.html',
  styleUrls: ['./ownerspannel.component.css']
})
export class OwnerspannelComponent implements OnInit {

  constructor(private ownerService:OwnersserviceService,private _router:Router) { }
  busdetail = new Busdetail()

  userName: string = "jbond";
  ngOnInit(): void {
    const string="10LS5RS"
  }



  onsubmit(){
    console.log(this.busdetail)
   
    this.ownerService.PostBusDetail(this.busdetail).subscribe((data)=>{
      this._router.navigate(["/ownerpanel"]).then(()=>{
        console.log(data)
        window.location.reload()
      }    )
     
    }
     
    )
  }
  


  
}

