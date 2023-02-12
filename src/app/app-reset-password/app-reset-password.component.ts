import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-reset-password',
  templateUrl: './app-reset-password.component.html',
  styleUrls: ['./app-reset-password.component.scss'],
})
export class AppResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.resetPasswordForm.value);
  }
}
