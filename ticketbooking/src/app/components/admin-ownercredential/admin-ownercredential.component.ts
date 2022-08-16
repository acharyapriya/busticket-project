import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ownercredential',
  templateUrl: './admin-ownercredential.component.html',
  styleUrls: ['./admin-ownercredential.component.css']
})
export class AdminOwnercredentialComponent implements OnInit {
  busName!:string ;
  busNo!:string;
  constructor() { }

  ngOnInit(): void {
  }
   
}
