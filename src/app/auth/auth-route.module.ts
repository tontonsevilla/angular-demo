import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: 'auth',
        children: [
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'register',
            component: RegisterComponent
          },
          {
            path: '',
            component: AuthComponent
          }
        ]
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

export class AuthRoutingModule { }