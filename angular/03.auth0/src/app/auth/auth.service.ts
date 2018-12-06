import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { WebAuth } from 'auth0-js';
// import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  userProfile: any;

  auth0 = new WebAuth({
    clientID: 'obMTTANaG5m5bR2ds1uMrd4eET7MoLAS',
    domain: 'xsylum-playground.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://www.backend.playground.com',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router) {
    if (!this.userProfile && localStorage.getItem('access_token')) {
      this.getProfile((err, profile) => { if (err) { console.log(err); } });
    }
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    console.log('handle authentication start');
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {

        window.location.hash = '';
        this.setSession(authResult);
        const requestedUrl = localStorage.getItem('savedUrl');
        if (requestedUrl) {
          console.log('RequestedURL was ' + requestedUrl);
          this.router.navigate([requestedUrl]);
        } else {
          console.log('RequestedURL was null. Navigating to home page');
          this.router.navigate(['/']);
        }

      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }

      localStorage.removeItem('savedUrl');
    });
  }

  private setSession(authResult): void {
    // expiration time
    // console.log('set session start with accessToken:\n' + authResult.accessToken + '\nidToken:\n'
    //   + authResult.idToken + '\nScopes:\n' + authResult.scope + '\nexpiresIn: ' + authResult.expiresIn);
    const expireAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expire_at', expireAt);

    // scopes
    const scopes: string = authResult.scope || '';
    localStorage.setItem('scopes', scopes);

    // load profile
    this.getProfile((err, profile) => { if (err) { console.log(err); } });
  }

  public logout(): void {
    // remove token and expiration date
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expire_at');
    localStorage.removeItem('scopes');
    this.userProfile = null;
    // back to home
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // check if token is not expired
    const expireAt = JSON.parse(localStorage.getItem('expire_at'));
    return new Date().getTime() < expireAt;
  }

  public userHasScopes(requiredScopes: string[] | string): boolean {
    const grantedScopes: string[] = localStorage.getItem('scopes').split(' ');
    // console.log('Granted scope: ' + grantedScopes + ' vs requiredScopes: ' + requiredScopes);

    // single scope possible
    if (typeof requiredScopes === 'string') {
      return grantedScopes.includes(requiredScopes);
    }

    // multiple possible scopes
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    return grantedScopes.some(possibleScope => {
      // console.log('Testing ' + possibleScope + ' against ' + requiredScopes + ': ' + requiredScopes.includes(possibleScope));
      return requiredScopes.includes(possibleScope);
    });
  }

  public getProfile(callback): void {

    // request user profile
    // https://auth0.com/docs/quickstart/spa/angular2/02-user-profile
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Cannot request user profile without Access Token');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      callback(err, profile);
    });
  }
}
