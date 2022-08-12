import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/loginmodel/login';
import { UsercredentialsService } from 'src/app/services/loginservices/usercredentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string
  password!:string
  reg=new Login()
  constructor(private credential:UsercredentialsService,private router_:Router,private usercredential:UsercredentialsService) { }

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

  submitcredential()
  {
    console.log(this.login);
    this.usercredential.postusercredential(this.reg).subscribe((data)=>{
      this.router_.navigate(["/login"]);
    })
    

  }
  
}
