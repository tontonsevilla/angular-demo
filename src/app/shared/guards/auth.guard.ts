import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

    private _canActivate = false;

    constructor (
        private authService: AuthService, 
        private router: Router
    ) {
        this.authService.isAuthenticate.subscribe(isAuthenticated => {
            this._canActivate = isAuthenticated;
          });
    }  
    
    canActivate(): boolean {

        if (!this._canActivate) {
            this.router.navigate(['../../auth/login'])
        }

        return this._canActivate;
    }
}