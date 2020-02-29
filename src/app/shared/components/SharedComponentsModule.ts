import { CommonModule } from '@angular/common';
import { SpinnerOverlayWrapperComponent } from './spinner-overlay-wrapper/spinner-overlay-wrapper.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
  
@NgModule({
    imports: [
      CommonModule,
      OverlayModule
    ],
    declarations: [
      SpinnerComponent,
      SpinnerOverlayWrapperComponent,
      SpinnerOverlayComponent
    ],
    exports: [
      SpinnerComponent,
      SpinnerOverlayWrapperComponent,
      SpinnerOverlayComponent
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