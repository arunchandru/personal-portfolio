import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { AccountComponent } from './account/account.component';
import { UserhelpComponent } from './userhelp/userhelp.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrdersComponent } from './orders/orders.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { DocsComponent } from './docs/docs.component';
import { ChummaComponent } from './chumma/chumma.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    OverviewComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    AccountComponent,
    UserhelpComponent,
    NotificationsComponent,
    OrdersComponent,
    ResetPasswordComponent,
    SettingsComponent,
    HeaderComponent,
    DocsComponent,
    ChummaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
