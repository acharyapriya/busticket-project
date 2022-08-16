import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOwnercredentialComponent } from './admin-ownercredential.component';

describe('AdminOwnercredentialComponent', () => {
  let component: AdminOwnercredentialComponent;
  let fixture: ComponentFixture<AdminOwnercredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOwnercredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOwnercredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
