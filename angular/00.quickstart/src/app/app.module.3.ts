/* Angular Imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Imports */
import { AppComponent } from './app.component.3';
/*
import { AppComponent }       from './app.component';
*/
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module.3';
/*
import { AppRoutingModule }   from './app-routing.module';
*/

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  declarations: [AppComponent, HighlightDirective, TitleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
