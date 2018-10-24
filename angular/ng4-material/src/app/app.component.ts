import { Component } from '@angular/core';
import { Http } from '@angular/http';

// https://stackoverflow.com/a/37208814/4906586
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /**
   * fake data?
   */
  myData: Array<any>;

  constructor(private http: Http) {
    // ERROR: [ts] Property 'map' does not exist on type 'Observable<Response>'.
    /*     this.http.get('https://jsonplaceholder.typicode.com/photos')
          .map(response => response.json())
          .subscribe(res => this.myData = res); */
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }

}
