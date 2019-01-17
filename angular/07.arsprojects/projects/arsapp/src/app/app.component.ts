import { Component, OnInit } from '@angular/core';
import { DummyService, Pet } from 'ars-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  localContent: String;
  awsContent: any;
  pets: Array<Pet> = undefined;

  constructor(private dummyService: DummyService) {
    this.localContent = this.dummyService.someText;
  }

  ngOnInit() {
    this.dummyService.loadPets().then(data => (this.pets = data));
  }
}
