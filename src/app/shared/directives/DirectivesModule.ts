import { NgModule } from '@angular/core';

@NgModule({
    exports: [
    ],
    declarations: [
    ]
  })
  export class DirectivesModule { 
    static forRoot() {
      return {
        ngModule: DirectivesModule
      }
    }
  }
