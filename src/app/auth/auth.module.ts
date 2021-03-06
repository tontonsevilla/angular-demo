import { RegisterComponent } from './register/register.component';
import { DirectivesModule } from './../shared/directives/DirectivesModule';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-route.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from '../shared/components/SharedComponentsModule';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    HttpClientModule,
    SharedComponentsModule.forRoot()
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
