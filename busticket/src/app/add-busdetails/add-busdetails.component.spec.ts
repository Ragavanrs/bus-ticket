import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusdetailsComponent } from './add-busdetails.component';

describe('AddBusdetailsComponent', () => {
  let component: AddBusdetailsComponent;
  let fixture: ComponentFixture<AddBusdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBusdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
