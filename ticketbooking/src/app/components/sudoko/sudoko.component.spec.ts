import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokoComponent } from './sudoko.component';

describe('SudokoComponent', () => {
  let component: SudokoComponent;
  let fixture: ComponentFixture<SudokoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
