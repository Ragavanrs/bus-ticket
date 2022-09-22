import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingorderComponent } from './bookingorder.component';

describe('BookingorderComponent', () => {
  let component: BookingorderComponent;
  let fixture: ComponentFixture<BookingorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
