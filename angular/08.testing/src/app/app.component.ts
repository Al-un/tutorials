import { Component, OnInit } from '@angular/core';
import { DummyService } from './dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing';
  result: number;
  resultAsync: number;

  constructor(private dummyService: DummyService) {
    this.result = this.dummyService.addTwo(7);
  }

  ngOnInit(): void {
    this.dummyService.addPromiseTwo().then(value => (this.resultAsync = value));
  }
}
