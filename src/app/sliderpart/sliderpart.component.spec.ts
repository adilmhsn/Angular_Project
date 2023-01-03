import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderpartComponent } from './sliderpart.component';

describe('SliderpartComponent', () => {
  let component: SliderpartComponent;
  let fixture: ComponentFixture<SliderpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
