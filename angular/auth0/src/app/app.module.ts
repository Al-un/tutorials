import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { RestrictedComponent } from './restricted/restricted/restricted.component';
import { AppRouterModule } from './/app-router.module';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './public/callback/callback.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ErrorComponent } from './public/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestrictedComponent,
    CallbackComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
