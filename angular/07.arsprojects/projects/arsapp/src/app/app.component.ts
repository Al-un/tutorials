import { Component } from '@angular/core';
import { DummyService, ArsComponentsService } from 'ars-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  localContent: String;
  arsContent: String;

  constructor(
    private dummyService: DummyService,
    private arsService: ArsComponentsService
  ) {
    this.localContent = this.dummyService.otherText;
    this.arsContent = this.arsService.pouet;
  }
}
