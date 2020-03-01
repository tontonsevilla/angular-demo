import { ApiResponse } from './../models/common/ApiResponse';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/auth/User';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  endpoint: string = 'https://localhost:32768/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  private authenticationSource = new BehaviorSubject<boolean>(false);
  isAuthenticate = this.authenticationSource.asObservable();

  private tokenStorageKey = 'access_token';

  constructor(
    private apiService: ApiService,
    private jwtHelper: JwtHelperService
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<ApiResponse<any>> {
    return this.apiService.post<any>('/account/register', user) 
    .pipe(res => {
      return res;
    });
  }

  // Sign-in
  signIn(user: User) {
    return this.apiService.post<any>(`/authenticate/signin`, user)
    .pipe(res => {
      return res;
    });
  }

  logout() {
   localStorage.removeItem(this.tokenStorageKey);
  }

  private getToken(): string {
    return localStorage.getItem(this.tokenStorageKey);
  }

  authenticate() {    
    const token = this.getToken();

    this.authenticationSource.next(!this.jwtHelper.isTokenExpired(token));
  }
}