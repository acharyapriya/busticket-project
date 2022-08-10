import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Busschedule } from 'src/app/classes/busschedule';
import { Login } from 'src/app/classes/loginmodel/login';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { UsercredentialsService } from 'src/app/services/loginservices/usercredentials.service';
import { OwnersserviceService } from 'src/app/services/ownersservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

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
    this.Ownerservice.getcoverage().subscribe((data: any)=>{
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

  // onclickregister(){
  //   console.log("clicked register")
  // }
  // onclick(){
  //   console.log("just a click")
  // }
  // onclickpin(){
  //   console.log("clicked pin")

  // }
  // onclicksignup(){
  //   console.log("clicked signup")
  // }
    
  logout(event:any){
    if(event){
      localStorage.clear()
      this.router_.navigate([""]).then(() =>{window.location.reload()})
    }
  }
//  toBeBooked()
//   {
//     alert("kjkj")
//   }
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
      '<form>'+
      '<input id="username" class="swal2-input" type="text" placeholder="username">' +
      '<input id="password" class="swal2-input" type="password" required placeholder="password">'+  
      '</form>',
  
      preConfirm: () => {
        this.username = (<HTMLInputElement>document.getElementById("username")).value
        this.password = (<HTMLInputElement>document.getElementById("password")).value
        console.log(this.username != null && this.password != null)
        console.log("hello"+this.username != null )
        if(this.username != null && this.password != null){
          this.credential.loginUser(this.username,this.password).subscribe((data)=>{
            if(data){
              this.router_.navigate([""]).then(()=>{window.location.reload()})
              localStorage.setItem("loginUser",data.name)
              console.log("username"+data.username)
            }
            
            
          });
        }
        
  }})
  }
  login=new Login()

  RegisterPop(){
 
    Swal.fire({
      title: "Login",
      html:
      '<input id="username" class="swal2-input" placeholder="username" name="username"  type="text">' +
      '<input id="name" class="swal2-input" placeholder="name" name="name"  type="text">' +

      '<input id="email" class="swal2-input" placeholder="email" name="email"  type="email">' +

      '<input id="mobilenumber" class="swal2-input" placeholder="mobilenumber"  name="mobilenumber" type="tel">' +

      '<input id="password" class="swal2-input" placeholder="password"  name="password" type="password">',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      
      preConfirm: (submit) => {
        this.login.username = (<HTMLInputElement>document.getElementById("username")).value
        this.login.name = (<HTMLInputElement>document.getElementById("name")).value
        this.login.email = (<HTMLInputElement>document.getElementById("email")).value
        this.login.mobileno = (<HTMLInputElement>document.getElementById("mobilenumber")).value
        this.login.password = (<HTMLInputElement>document.getElementById("password")).value
        
        if(this.login.username != null && this.login.email != null && this.login.password != null){
          console.log(this.login != null)
          this.credential.postusercredential(this.login).subscribe((data)=>{
            if(data){
              this.router_.navigate(["home"]).then(() =>{window.location.reload()
              Swal.fire(`welcome ${data.name}`)})
              localStorage.setItem("loginUser",data.name)
            }
          });
        }else{
          Swal.fire("Enter the correct data")
        } 
  }})
  }


}
