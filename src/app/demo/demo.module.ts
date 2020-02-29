import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedComponentsModule } from '../shared/components/SharedComponentsModule';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedComponentsModule.forRoot()
  ],
  declarations: [DemoComponent]
})
export class DemoModule { }
