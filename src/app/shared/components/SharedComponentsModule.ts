import { SpinnerOverlayWrapperComponent } from './spinner-overlay-wrapper/spinner-overlay-wrapper.component';

import { NgModule, Injectable } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
  
@NgModule({
    imports: [
    ],
    declarations: [
      SpinnerComponent,
      SpinnerOverlayWrapperComponent
    ],
    exports: [
      SpinnerComponent,
      SpinnerOverlayWrapperComponent
    ]
  })
  export class SharedComponentsModule { }