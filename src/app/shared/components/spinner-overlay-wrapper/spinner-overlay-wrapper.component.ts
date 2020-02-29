import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-overlay-wrapper',
  templateUrl: './spinner-overlay-wrapper.component.html',
  styleUrls: ['./spinner-overlay-wrapper.component.css']
})
export class SpinnerOverlayWrapperComponent implements OnInit {

  showSpinner: boolean;

  constructor() { }

  ngOnInit() {
  }

}
