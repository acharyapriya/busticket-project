import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscardlist',
  templateUrl: './buscardlist.component.html',
  styleUrls: ['./buscardlist.component.css']
})
export class BuscardlistComponent implements OnInit {
@Input() schedulelist:any
  constructor() { }

  ngOnInit(): void {
  }

}
