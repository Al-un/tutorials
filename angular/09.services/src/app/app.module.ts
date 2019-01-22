import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextService } from './services/text.service';
import { AbstTextService } from './services/abst-text.service';
import { NumService } from './services/num.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: AbstTextService, useClass: NumService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
