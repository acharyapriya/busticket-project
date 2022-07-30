import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsercredentialsService } from 'src/app/services/loginservices/usercredentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string
  password!:string

  constructor(private credential:UsercredentialsService,private router_:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.credential.loginUser(this.username,this.password).subscribe((data)=>{
      if(data){
        this.router_.navigate([""])
        localStorage.setItem("loginUser",data.name)
        console.log(data.username)
      }else{
        this.router_.navigate(["/login"])
      }
    });
    
  }
  
}
