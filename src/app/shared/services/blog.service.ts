import { Blog } from './../models/blogs/Blog';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/ApiResponse';

@Injectable({
    providedIn: 'root'
  })
  
  export class BlogService {
  
    constructor(
      private apiService: ApiService
    ) {
    }
  
    getBlogs(): Observable<ApiResponse<Blog[]>> {
      return this.apiService.get<Blog[]>('/blogs') 
      .pipe(res => {
        return res;
      });
    }
  }