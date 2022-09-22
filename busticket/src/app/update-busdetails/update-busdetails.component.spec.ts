import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusdetailsComponent } from './update-busdetails.component';

describe('UpdateBusdetailsComponent', () => {
  let component: UpdateBusdetailsComponent;
  let fixture: ComponentFixture<UpdateBusdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
