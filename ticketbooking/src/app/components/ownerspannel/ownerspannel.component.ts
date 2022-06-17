import { Component, OnInit } from '@angular/core';
import { Busdetail } from 'src/app/classes/busdetail';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';

@Component({
  selector: 'app-ownerspannel',
  templateUrl: './ownerspannel.component.html',
  styleUrls: ['./ownerspannel.component.css']
})
export class OwnerspannelComponent implements OnInit {

  constructor(private ownerService:OwnersserviceService) { }
  busdetail = new Busdetail()
  ngOnInit(): void {
  }

  onsubmit(){
    console.log(this.busdetail)
    this.ownerService.PostBusDetail(this.busdetail).subscribe(

    )
  }
  
}
