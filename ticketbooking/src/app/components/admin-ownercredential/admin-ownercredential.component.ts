import { Component, OnInit } from '@angular/core';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';
import { OwnerspannelComponent } from '../ownerspannel/ownerspannel.component';

@Component({
  selector: 'app-admin-ownercredential',
  templateUrl: './admin-ownercredential.component.html',
  styleUrls: ['./admin-ownercredential.component.css']
})
export class AdminOwnercredentialComponent implements OnInit {
  
  constructor( private ownerservices:OwnersserviceService ) { }
  busName!:string ;
  busNo!:string;

  ngOnInit(): void {
  }
  onsubmitcrediential()
  {
    this.ownerservices.loginowner(this.busName,this.busNo).subscribe((data)=>{
      console.log(data)
    })
  }
}
