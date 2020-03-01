import { ApiResponse } from './../models/common/ApiResponse';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/auth/User';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  endpoint: string = 'https://localhost:32768/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  private tokenStorageKey = 'access_token';

  constructor(
    private http: HttpClient,
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

  getToken() {
    return localStorage.getItem(this.tokenStorageKey);
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem(this.tokenStorageKey);
    return (authToken !== null) ? true : false;
  }

  logout() {
   localStorage.removeItem(this.tokenStorageKey);
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }));
  }

  isAuthenticated(): boolean {    
    const token = localStorage.getItem(this.tokenStorageKey);
    return !this.jwtHelper.isTokenExpired(token);
  }
}