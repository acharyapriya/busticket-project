import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Busschedule } from '../classes/busschedule';
import { AdminserviceService } from '../services/adminservice.service';
import { UsercredentialsService } from '../services/loginservices/usercredentials.service';
import { OwnersserviceService } from '../services/ownersservice.service';
@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {
  fromoption1 = new FormControl('', [Validators.required]);
  username1!:any
  username!:string
  password!:string
  data: any;

 
  constructor(private credential:UsercredentialsService,private Adminservice:AdminserviceService,private Ownerservice:OwnersserviceService, private router_:Router) { }
  busschedule=new Busschedule();
  schedulelist:any=[];
  today= new Date();
  buscoverage:any=[]
  if_userpresent=true;
  ngOnInit(): void {
    
    if(localStorage.getItem("loginUser")){
      this.username1 = localStorage.getItem("loginUser")
      this.if_userpresent = !this.if_userpresent 
    }
    this.Ownerservice.getcoverage().subscribe((data)=>{
      this.buscoverage=data
     
      
    })
  }
  register="Register"
  signup="Signup"
  click="Click"
  pin="pin"
  primary="btn btn-primary"
  secondary="btn btn-secondary"
  success="btn btn-success"
  danger="btn btn-danger"
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

  onclickregister(){
    console.log("clicked register")
  }
  onclick(){
    console.log("just a click")
  }
  onclickpin(){
    console.log("clicked pin")

  }
  onclicksignup(){
    console.log("clicked signup")
  }
    
  logout(event:any){
    if(event){
      localStorage.clear()
      this.router_.navigate([""]).then(() =>{window.location.reload()})
    }
  }
 toBeBooked()
  {
    alert("kjkj")
  }
  savefromoption:any=[];
  onfrom(data:any)
  {
    if(data)
    {
      this.savefromoption=[]
      for (var i in this.buscoverage)
      {
        if(this.buscoverage[i]!=data)
        {

          const fromstored=this.buscoverage[i];
          this.savefromoption.push(fromstored);
        }
        else(data='')
        
      }
    }
   
 
    console.log(this.buscoverage);
     
    
  }

  loginpop(event:any)
  {
    Swal.fire({
      title: "Login",
    
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="username">' +
      '<input id="swal-input2" class="swal2-input" placeholder="password">',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      
      preConfirm: () => {
        
        this.credential.loginUser(this.username,this.password).subscribe((data)=>{
          if(data){
            this.router_.navigate([""])
            localStorage.setItem("loginUser",data.name)
            console.log(data.username)
          }else{
            this.router_.navigate(["/login"])
          }
        });
  }})
        
    
  }
  }








  



