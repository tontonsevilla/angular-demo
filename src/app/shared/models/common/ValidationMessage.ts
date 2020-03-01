import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from './ApiResponse';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessage {

  _type: string;
  get type(): string {
    return this._type;
  }

  _isToast: boolean;
  get isToast(): boolean {
    return this._isToast;
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  get messages(): string[] {
    return this._messages;
  }

  private  _messages = new Array<string>();

  static create(): ValidationMessage {
    return new ValidationMessage();
  }

  static createFromApiResponse(response: ApiResponse<any>) {
    const validationMessage = new ValidationMessage();

    if (response.hasError) {
      validationMessage.pushMessage(response.errorMessages);
    }

    return validationMessage;
  }

  static createFromHttpErrorResponse(response: HttpErrorResponse) {
    const validationMessage = new ValidationMessage();

    if (response.error instanceof ErrorEvent) {
      // client-side error
      validationMessage.pushMessage(response.error.message);
    } else {
      // server-side error
      validationMessage.pushMessage(`Error Code: ${response.status}\nMessage: ${response.message}`);
    }

    return validationMessage;
  }

  setTitle(title: string): ValidationMessage {
    this._title = title;
    return this;
  }

  pushMessage(message: string | string[]): ValidationMessage {
    if (Array.isArray(message)) {
      this._messages.push(...message);
    } else {
      this._messages.push(message);
    }
    return this;
  }

  isDanger(): ValidationMessage {
    this._type = 'danger';
    return this;
  }

  isSuccess(): ValidationMessage {
    this._type = 'success';
    return this;
  }

  showAsToast(): ValidationMessage {
    this._isToast = true;
    return this;
  }

}
