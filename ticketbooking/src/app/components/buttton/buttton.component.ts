import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttton',
  templateUrl: './buttton.component.html',
  styleUrls: ['./buttton.component.css']
})
export class ButttonComponent implements OnInit {
@Input() name!:String
  constructor() { }

  ngOnInit(): void {
  }

}
