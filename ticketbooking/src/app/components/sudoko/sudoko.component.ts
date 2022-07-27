import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sudoko',
  templateUrl: './sudoko.component.html',
  styleUrls: ['./sudoko.component.css']
})
export class SudokoComponent implements OnInit {
  @ViewChild('saveUserNameCheckBox') user!:ElementRef 
  saveUsername= true ;
  isChecked!:true;
 
  checkbox_checked: boolean | undefined;

state!: number;
  constructor() { }

  ngOnInit(): void {
  }
  sudoko(n:number)
  {
  return new Array(n);
  }
  public onSaveUsernameChanged(value:boolean){
    if(this.saveUsername==true)
    {
      console.log("true")
    }
    else
    {
      console.log("false")
    }

}
}
