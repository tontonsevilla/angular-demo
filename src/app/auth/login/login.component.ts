import { User } from './../../shared/models/auth/User';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';
import { ValidationMessage } from 'src/app/shared/models/common/ValidationMessage';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validationMessage: ValidationMessage;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.createLoginForm();
  }

  private createLoginForm(): FormGroup {
    return this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  login() {
    this.loginForm.markAllAsTouched();
    
    if (this.loginForm.invalid) {
      return;
    }

    const user = this.loginForm.getRawValue() as User;
    user.username = user.email;
    
    this.authService.signIn(user)
    .subscribe(res => {     
      if (!res.hasError && res.data) {
        localStorage.setItem('access_token', res.data.token)
        this.router.navigate(['../../demo']);
        this.authService.authenticate();
      } else {
        this.validationMessage = ValidationMessage.createFromApiResponse(res)
        .setTitle('Login')
        .isDanger()
        .showAsToast();
      }
    },
    (error: any) => {
      this.validationMessage = ValidationMessage.createFromHttpErrorResponse(error)
        .setTitle('Login')
        .isDanger()
        .showAsToast();
    });

  }

  isInvalid(key: string): boolean {
    return this.formService.isFieldInvalid(key, this.loginForm);
  }

}
