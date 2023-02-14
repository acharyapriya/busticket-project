import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OwnerdetailserviceService } from 'src/app/ownerdetailservice.service';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';
import Swal from 'sweetalert2';
import { OwnerspannelComponent } from '../ownerspannel/ownerspannel.component';

@Component({
  selector: 'app-admin-ownercredential',
  templateUrl: './admin-ownercredential.component.html',
  styleUrls: ['./admin-ownercredential.component.css']
})
export class AdminOwnercredentialComponent implements OnInit {
  route: any;

 

  
  constructor( private ownerservices:OwnerdetailserviceService,private router_:Router,private activatedRoute: ActivatedRoute ) { }
  adminname!:string ;
  adminpassword!:string;
  owner="Owner";
  error!:string;
  private sub: any;

  // showFiller = false;
  

  ngOnInit(): void {
    // this.sub = this.activatedRoute.paramMap.subscribe(params:any) => {
    //   this.adminname = params["adminname"];
    //   });
    
  }
  onsubmitcrediential()
  {
    this.ownerservices.loginowner(this.adminname,this.adminpassword).subscribe((data)=>{
      console.log(data.adminid)
      if(data.rollbase==this.owner){

        localStorage.setItem("travels",data.adminid)
        this.router_.navigate(["/ownercard",this.adminname]).then(()=>{window.location.reload()})
        
     }
     else if(data.rollbase=="Admin-Rw")
     {
      localStorage.setItem("admprev",data)
        this.router_.navigate(["/admincard"]).then(()=>{window.location.reload()})
      }
      else if(data.rollbase=="Admin-R")
     {
      localStorage.setItem("admprev",data)
        this.router_.navigate(["/admincard"]).then(()=>{window.location.reload()})
      }

     });

    }
 }


