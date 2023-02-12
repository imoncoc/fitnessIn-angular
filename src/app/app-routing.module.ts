import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppResetPasswordComponent } from './app-reset-password/app-reset-password.component';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { AppUserComponent } from './app-user/app-user.component';

const routes: Routes = [
  {path: '', component: AppHomeComponent},
  {path: 'login', component: AppLoginComponent},
  {path: 'signup', component: AppSignupComponent},
  {path: 'reset-password', component: AppResetPasswordComponent},
  {path: 'user', component: AppUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
