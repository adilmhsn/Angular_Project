import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestScheduler } from 'rxjs/testing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  formValue!: FormGroup

  constructor(private FormBuilder: FormBuilder) {
  }
  ngOnInit(): void {

    this.formValue = this.FormBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    })
  }

}
