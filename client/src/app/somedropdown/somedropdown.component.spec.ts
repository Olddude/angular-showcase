import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomedropdownComponent } from './somedropdown.component';

describe('SomedropdownComponent', () => {
  let component: SomedropdownComponent;
  let fixture: ComponentFixture<SomedropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomedropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
