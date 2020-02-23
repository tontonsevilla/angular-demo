import { User } from './../../shared/models/auth/User';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private authService: AuthService
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
    this.authService.signIn(user);

  }

  isInvalid(key: string): boolean {
    return this.formService.isFieldInvalid(key, this.loginForm);
  }

}
