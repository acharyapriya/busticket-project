import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulebusCardComponent } from './schedulebus-card.component';

describe('SchedulebusCardComponent', () => {
  let component: SchedulebusCardComponent;
  let fixture: ComponentFixture<SchedulebusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulebusCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulebusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
