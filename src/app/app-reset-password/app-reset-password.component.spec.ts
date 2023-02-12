import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppResetPasswordComponent } from './app-reset-password.component';

describe('AppResetPasswordComponent', () => {
  let component: AppResetPasswordComponent;
  let fixture: ComponentFixture<AppResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
