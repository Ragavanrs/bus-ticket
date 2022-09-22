import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateRegistrationComponent } from './admin-update-registration.component';

describe('AdminUpdateRegistrationComponent', () => {
  let component: AdminUpdateRegistrationComponent;
  let fixture: ComponentFixture<AdminUpdateRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
