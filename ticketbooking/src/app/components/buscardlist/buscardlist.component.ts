import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Booking } from 'src/app/classes/booking';
import { TicketbookingService } from 'src/app/services/Booking/ticketbooking.service';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';
import seatconfiguration1 from '../../../assets/seatconfig-json/seatconfig-1.json';
import seatconfiguration2 from '../../../assets/seatconfig-json/seatconfig2.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscardlist',
  templateUrl: './buscardlist.component.html',
  styleUrls: ['./buscardlist.component.css']
})

export class BuscardlistComponent implements OnInit {
  [x: string]: any;
@Input() schedulelist:any
@Input()username:any
@ViewChild('widgetsContent') widgetsContent!: ElementRef;
@ViewChild("para") para!:ElementRef;
ticketSchedule!: any ;
@Input() userlogin!:Boolean
user!:any
seatmap:any = [];

seatChartConfig = {
showRowsLabel: false,
showRowWisePricing: false,
newSeatNoForRow: false
};
cart:any = {
  selectedSeats: [] ,
  seatstoStore: [],
  totalamount: 0,
  cartId: "",
  eventId: 0
};
  bookedid: any;
  book!:any
  userDetail!:any

 

   constructor(private  ownerservice:OwnersserviceService,private ticketbooking:TicketbookingService,private router_:Router) { }

   ngOnInit(): void {

  }
  data!:string 
  busID!:string 
  blockdata:any=[]
  dd!:any;

  
 
 
  public scrollRight() {
    
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 400), behavior: 'smooth' });
  }

  public scrollLeft() {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 400), behavior: 'smooth' });
  }
   
  hello(busid:string){
    this.busID = busid
   
  }

  hello2(busID:any){
 this.ownerservice.getbusdetailbyId(busID).subscribe((req)=>{
      this.data = req.mode
    })
  
  }

  booking=new Booking()
 
  configuration : any = null
  toBeBooked(detail:any){
 
   
    this.bookedid=detail;
  
    
  

  if(detail.seatconfig == 'seatconfig-1'){  
    this.processSeatChart(seatconfiguration1)

  }else if (detail.seatconfig == 'seatconfig-2'){
    this.processSeatChart(seatconfiguration2)
  } 
 
}

closing(){
this.seatmap = []
this.cart=[]


}

public processSeatChart(map_data: any[]) {


this.userDetail=localStorage.getItem("datas");
this.ticketbooking.getticketDetails(this.userDetail).subscribe((data)=>{
  this.blockdata=data
  console.log(this.blockdata)

 
})
 
  console.log(this.seatmap)

  if (map_data.length > 0) {
    var seatNoCounter = 1;

    for (let __counter = 0; __counter < map_data.length; __counter++) {
      var item_map = map_data[__counter].seat_map;

      item_map.forEach((map_element:any) => {
        //seatRowLabel: map_element.seat_label
        var mapObj:any = {
         
          seats: [],
         

         
       };
     
       

        var seatValArr = map_element.layout.split("");
     
        seatValArr.forEach((item:any) => {
         
          var seatObj:any = {
           // key: map_element.seat_label + "_" + totalItemCounter,
            price: map_data[__counter].seat_price,
            status: "available",
          
          };
          
        
          
          
       
       
          if (item != "_") {
            console.log(item)
            seatObj["seatLabel"] =
              map_element.seat_label + " " + seatNoCounter;
             if (seatNoCounter < 10) {
              seatObj["seatNo"] = "0" + seatNoCounter;
             
             } 
           else {
              seatObj["seatNo"] = "" + seatNoCounter;
             
            }
           
              
          

            seatNoCounter++;
          } else {
            seatObj["seatLabel"] = "";
          }
        
          mapObj["seats"].push(seatObj);
         
        });
       
        this.seatmap.push(mapObj);
       
       this.seatmap.map((value:any)=>{
        console.log(value)

       
        })
       
       
      });
    }
  }
}
public selectSeat(seatObject:any) {
console.log(seatObject)
  if (seatObject.status == "available") {
    seatObject.status = "booked";
   
    
    this.cart.selectedSeats.push(seatObject.seatLabel);
    this.cart.seatstoStore.push(seatObject.key);
    this.cart.totalamount += seatObject.price;
  } else if ((seatObject.status = "booked")) {
    seatObject.status = "available";
    var seatIndex = this.cart.selectedSeats.indexOf(seatObject.seatLabel);
    if (seatIndex > -1) {
      this.cart.selectedSeats.splice(seatIndex, 1);
      this.cart.seatstoStore.splice(seatIndex, 1);
      this.cart.totalamount -= seatObject.price;
    }
  }
}


bookTicket(){

 
   this.booking.setScheduleID(this.bookedid.scheduleID)
   
 
  this.user=localStorage.getItem("datas")
 this.booking.setuserName(this.user);
 this.booking.setbookingLabel(this.cart.selectedSeats.toString());

  this.booking.setfare(this.cart.totalamount)
  this.booking.setnoOfBookingSeats(this.cart.selectedSeats.length)
  this.booking.setbookingStatus("Booked")
  console.log(this.seatmap)
 

  this.ticketbooking.seatbooking(this.booking).subscribe((data)=>{
if(data)
{
  alert("booked")
}
  
  
   
  })
  
}

}
    

 