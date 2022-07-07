import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';

@Component({
  selector: 'app-buscardlist',
  templateUrl: './buscardlist.component.html',
  styleUrls: ['./buscardlist.component.css']
})

export class BuscardlistComponent implements OnInit {
@Input() schedulelist:any
@ViewChild('widgetsContent') widgetsContent!: ElementRef<any>;
@ViewChild("para") para!:ElementRef;

   constructor(private  ownerservice:OwnersserviceService) { }

  ngOnInit(): void {
    
  }

 
  public scrollRight() {
    
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 400), behavior: 'smooth' });
  }

  public scrollLeft() {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 400), behavior: 'smooth' });
  }
    data!:string 
    busID!:string 
  hello(busid:string){
    this.busID = busid
   
  }

  hello2(busID:any){
 this.ownerservice.getbusdetailbyId(busID).subscribe((req)=>{
      this.data = req.mode
    })
    console.log(this.data)
  }
 
}
 