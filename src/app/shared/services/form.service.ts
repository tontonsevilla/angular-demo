import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
  export class FormService {

    isFieldInvalid(key: string, form: FormGroup): boolean {
        const input = form.get(key);
        return input.invalid && (input.dirty || input.touched);
    }

  }
