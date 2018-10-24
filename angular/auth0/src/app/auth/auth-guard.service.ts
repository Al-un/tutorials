import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth0: AuthService, private router: Router) {

    }

    // https://angular.io/api/router/CanActivate
    // https://angular.io/api/router/ActivatedRouteSnapshot
    // https://angular.io/api/router/RouterStateSnapshot
    // https://auth0.com/docs/quickstart/spa/angular2/04-authorization
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        // get requested url
        const requestedUrl = route.pathFromRoot
            .map(activatedRouteSnapshot => activatedRouteSnapshot.url.length > 0 ? activatedRouteSnapshot.url[0].path : '')
            .join('/');

        // authentication always required
        if (!this.auth0.isAuthenticated()) {
            console.log('User requesting URL ' + requestedUrl + ' is not authenticated');
            localStorage.setItem('savedUrl', requestedUrl);
            this.auth0.login();
            return false;
        }

        const requiredScopes: string[] | string = route.data['expectedScopes'] || null;

        if (this.auth0.userHasScopes(requiredScopes)) {
            console.log('User is authorized to access ' + requestedUrl);
            return true;
        } else {
            console.log('User is denied access to ' + requestedUrl + '. Requesting '
                + requiredScopes + ' when user has ' + localStorage.getItem('scopes'));
            this.router.navigate(['/error']);
            return false;
        }

    }
}
