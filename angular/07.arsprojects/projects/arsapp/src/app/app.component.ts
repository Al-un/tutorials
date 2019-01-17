import { Component, OnInit } from '@angular/core';
import { DummyService, ArsComponentsService } from 'ars-components';
import { AwsGatewayService } from './aws-gateway.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  localContent: String;
  arsContent: String;
  awsContent: any;
  pets: any;

  constructor(
    private dummyService: DummyService,
    private arsService: ArsComponentsService,
    private awsService: AwsGatewayService
  ) {
    this.localContent = this.dummyService.otherText;
    this.arsContent = this.arsService.pouet;
    this.awsContent = this.awsService.pouet;
  }

  ngOnInit() {
    this.awsService.loadPets();
    this.dummyService.load();
  }
}
