import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArsComponentsModule } from 'ars-components';
import { AwsGatewayService } from './aws-gateway.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ArsComponentsModule],
  providers: [AwsGatewayService],
  bootstrap: [AppComponent]
})
export class AppModule {}
