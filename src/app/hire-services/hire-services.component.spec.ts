import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireServicesComponent } from './hire-services.component';

describe('HireServicesComponent', () => {
  let component: HireServicesComponent;
  let fixture: ComponentFixture<HireServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
