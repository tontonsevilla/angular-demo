import { DemoComponent } from './demo.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
    { 
        path: 'demo',
        canActivate: [AuthGuard],
        component: DemoComponent
    },
    {
      path: '',
      canActivate: [AuthGuard],
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