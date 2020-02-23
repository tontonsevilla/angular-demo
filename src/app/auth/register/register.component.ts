import { throwError } from 'rxjs';
import { User } from './../../shared/models/auth/User';
import { AuthService } from './../../shared/services/auth.service';
import { FormService } from './../../shared/services/form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registrationForm = this.createRegistrationForm();
  }

  private createRegistrationForm() {
    return this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  isInvalid(key: string): boolean {
    return this.formService.isFieldInvalid(key, this.registrationForm);
  }

  register() {
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.invalid) {
      return;
    }

    const user = this.registrationForm.getRawValue() as User;

    this.authService.signUp(user);
  }

}
