import { ShowAuthedDirective } from './show-authed.directive';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
      ShowAuthedDirective
    ],
    declarations: [
      ShowAuthedDirective
    ]
  })
  export class DirectivesModule { 
    static forRoot() {
      return {
        ngModule: DirectivesModule
      }
    }
  }
