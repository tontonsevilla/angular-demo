import { AuthRoutingModule } from './auth-route.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
