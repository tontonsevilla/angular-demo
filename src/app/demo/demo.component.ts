import { Observable, of } from 'rxjs';
import { Blog } from './../shared/models/blogs/Blog';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { ValidationMessage } from '../shared/models/common/ValidationMessage';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  validationMessage: ValidationMessage;
  blogs: Observable<Blog[]>;

  constructor(
    private blogService: BlogService
  ) { 
  }

  ngOnInit() {
    this.blogService.getBlogs()
    .subscribe(res => {     
      if (!res.hasError && res.data) {
        this.blogs = of(res.data);
      } else {
        this.validationMessage = ValidationMessage.createFromApiResponse(res)
        .setTitle('Get Blogs')
        .isDanger()
        .showAsToast();
      }
    },
    (error: any) => {
      this.validationMessage = ValidationMessage.createFromHttpErrorResponse(error)
        .setTitle('Get Blogs')
        .isDanger()
        .showAsToast();
    });
  }

}
