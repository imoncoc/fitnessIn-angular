import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppProductComponent } from './app-product/app-product.component';
import { AppGalleryComponent } from './app-gallery/app-gallery.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { MaterialsModule } from './materials/materials.module';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { AppResetPasswordComponent } from './app-reset-password/app-reset-password.component';
import { AppUserComponent } from './app-user/app-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppHomeComponent,
    AppProductComponent,
    AppGalleryComponent,
    AppLoginComponent,
    AppSignupComponent,
    AppResetPasswordComponent,
    AppUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
