import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteRegistrationComponent } from './admin-delete-registration.component';

describe('AdminDeleteRegistrationComponent', () => {
  let component: AdminDeleteRegistrationComponent;
  let fixture: ComponentFixture<AdminDeleteRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
