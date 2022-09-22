import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbuscommentComponent } from './viewbuscomment.component';

describe('ViewbuscommentComponent', () => {
  let component: ViewbuscommentComponent;
  let fixture: ComponentFixture<ViewbuscommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbuscommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbuscommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
