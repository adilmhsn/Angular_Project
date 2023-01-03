import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonpart',
  templateUrl: './buttonpart.component.html',
  styleUrls: ['./buttonpart.component.css']
})
export class ButtonpartComponent {
  public Str=""
  ngOnInit(): void {
  }
  buttoncontent(){
    this.Str ="Button is Clicked";
  }
}
