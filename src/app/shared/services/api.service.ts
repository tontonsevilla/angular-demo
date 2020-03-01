import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from './../models/common/ApiResponse';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  
export class ApiService {
    endpoint: string = 'https://localhost:32768/api/v1';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    currentUser = {};
  
    constructor(
        private http: HttpClient
    ) {
    }
  
    post<T>(apiUrlPath: string, data: any): Observable<ApiResponse<T>> {
        return this.http.post<ApiResponse<T>>(`${this.endpoint}${apiUrlPath}`, data)
            .pipe(res => {
                if (res) {
                    return res;
                }
            },
            catchError(this.handleError));
    }

    get<T>(apiUrlPath: string): Observable<ApiResponse<T>> {
        return this.http.get<ApiResponse<T>>(`${this.endpoint}${apiUrlPath}`, { headers: this.headers })
            .pipe(res => {
                if (res) {
                    return res;
                }
            },
            catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse) {
        let msg = '';
    
        if (error.error instanceof ErrorEvent) {
          // client-side error
          msg = error.error.message;
    
        } else {
          // server-side error
          msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
    
        return throwError(error);
      }
    
  }