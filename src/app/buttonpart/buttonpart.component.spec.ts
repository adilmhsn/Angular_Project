import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonpartComponent } from './buttonpart.component';

describe('ButtonpartComponent', () => {
  let component: ButtonpartComponent;
  let fixture: ComponentFixture<ButtonpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
