import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logAction(action: string) {
    console.log(
      `The date is: ${new Date().toDateString()}, the action taken is: ${action}
      }`,
    );
  }
}
