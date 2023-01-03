import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpart',
  templateUrl: './mainpart.component.html',
  styleUrls: ['./mainpart.component.css']
})
export class MainpartComponent {

  public Str=""
  ngOnInit()  {
  }
maincontent(){
  this.Str ="Just a Button :)";
}
}
