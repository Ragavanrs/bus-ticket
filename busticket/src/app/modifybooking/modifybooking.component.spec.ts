import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifybookingComponent } from './modifybooking.component';

describe('ModifybookingComponent', () => {
  let component: ModifybookingComponent;
  let fixture: ComponentFixture<ModifybookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifybookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
