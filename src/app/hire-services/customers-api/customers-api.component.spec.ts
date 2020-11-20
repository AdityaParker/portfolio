import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersApiComponent } from './customers-api.component';

describe('CustomersApiComponent', () => {
  let component: CustomersApiComponent;
  let fixture: ComponentFixture<CustomersApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
