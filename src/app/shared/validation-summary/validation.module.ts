import { ValidationSummaryComponent } from './validation-summary.component';
import { NgModule, Injectable, ModuleWithProviders } from '@angular/core';

@NgModule({
    imports: [
    ],
    declarations: [
        ValidationSummaryComponent
    ],
    exports: [
        ValidationSummaryComponent
    ]
  })
  export class ValidationModule { 
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: ValidationModule
        };
      }
  }
  