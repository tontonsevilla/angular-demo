import { DemoComponent } from './demo.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { 
        path: 'demo',
        component: DemoComponent
    },
    {
      path: '',
      component: DemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class DemoRoutingModule { }