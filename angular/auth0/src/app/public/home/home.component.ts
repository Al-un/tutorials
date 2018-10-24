import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // https://stackoverflow.com/a/42087288/4906586
  get accessToken(): string {
    return localStorage.getItem('access_token');
  }

  get idToken(): string {
    return localStorage.getItem('id_token');
  }

  get expiredAt(): string {
    return localStorage.getItem('expire_at');
  }

  get scopes(): string {
    return localStorage.getItem('scopes');
  }
}
