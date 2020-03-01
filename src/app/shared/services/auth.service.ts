import { ApiResponse } from './../models/common/ApiResponse';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/auth/User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'https://localhost:32768/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router,
    private apiService: ApiService
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
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }));
  }

}