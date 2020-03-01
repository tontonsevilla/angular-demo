import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessage {
  private static _title: string;

  static get title(): string {
    return this._title;
  }

  static get messages(): string[] {
    return this._messages;
  }

  private static _messages = new Array<string>();

  static create(): ValidationMessage {
    return new ValidationMessage();
  }

  static setTtitle(title: string): ValidationMessage {
    return (this._title = title);
  }

  static pushMessage(message: string) {
    this._messages.push(message);
  }
}
