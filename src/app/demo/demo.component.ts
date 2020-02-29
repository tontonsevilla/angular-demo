import { SpinnerOverlayService } from './../shared/services/spinner-overlay.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(
    private spinnerOverlayService: SpinnerOverlayService
  ) { 
  }

  ngOnInit() {
    this.spinnerOverlayService.show();
  }

}
