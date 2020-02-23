import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-route.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ]
})
export class AuthModule { }
