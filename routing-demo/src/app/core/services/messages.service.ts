import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  isDisplayed = false;

  private messages: string[] = [];

  constructor() { }

  addMessage(message: string): void {
    const currentDate = new Date();
    this.messages.unshift(`${message} at ${currentDate.toLocaleString()}`);
  }

  getMessages(): Array<string> {
    return this.messages;
  }

  clearMessages(): void {
    this.messages.length = 0;
  }
}
