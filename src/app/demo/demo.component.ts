import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { debounce, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
