import { Injectable } from '@angular/core';
import { Observable, from, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationSrcviceService {
  notification: string[];
  constructor() {
    this.notification = [
      'You have unread messages',
      'pepole reacting to our post..',
      'hamada sent a friend request',
      '',
      'post shared succesfly',
    ];
  }

  getNotification(): Observable<string> {
    let counter = 0;
    return new Observable<string>((obsrever) => {
      let intervel = setInterval(() => {
        if (counter == this.notification.length) {
          obsrever.complete();
        }
        if (this.notification[counter] == '') {
          obsrever.error('thisss is empty');
        }
        obsrever.next(this.notification[counter]);
        counter++;
      }, 2000);
      return {
        unsubscribe() {
          clearInterval(intervel);
        },
      };
    });
    return from(this.notification);
  }
}
