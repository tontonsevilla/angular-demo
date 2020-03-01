import { CommonModule } from '@angular/common';
import { SpinnerOverlayWrapperComponent } from './spinner-overlay-wrapper/spinner-overlay-wrapper.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ValidationSummaryComponent } from './validation-summary/validation-summary.component';
  
@NgModule({
    imports: [
      CommonModule,
      OverlayModule
    ],
    declarations: [
      SpinnerComponent,
      SpinnerOverlayWrapperComponent,
      SpinnerOverlayComponent,
      ValidationSummaryComponent
    ],
    exports: [
      SpinnerComponent,
      SpinnerOverlayWrapperComponent,
      SpinnerOverlayComponent,
      ValidationSummaryComponent
    ],
    entryComponents: [SpinnerOverlayComponent]
  })
  export class SharedComponentsModule { 
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedComponentsModule
      };
    }
  }