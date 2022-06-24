import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-buscardlist',
  templateUrl: './buscardlist.component.html',
  styleUrls: ['./buscardlist.component.css']
})

export class BuscardlistComponent implements OnInit {
@Input() schedulelist:any
@ViewChild('widgetsContent') widgetsContent!: ElementRef<any>;
@ViewChild("para") para!:ElementRef;

   constructor() { }

  ngOnInit(): void {
    
  }

 
  public scrollRight() {
    
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 400), behavior: 'smooth' });
  }

  public scrollLeft() {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 400), behavior: 'smooth' });
  }
    
}
