import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationSrcviceService } from '../../service/notification-srcvice.service';
import { error } from 'console';
import { Observable, Subscription, filter, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { CounterAction, Decrease } from '../../Store/Counter_action';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  subScribition!: Subscription;
  note: string[] = [];
  count!: number;
  counter!: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {
    this.counter = this.store.select('counter');

    //   this.counter.subscribe((data) => {
    //     this.count = data;
    //   });

    // }
  }
  increaseCounterVAlue() {
    this.store.dispatch(CounterAction());
  }
  mius() {
    this.store.dispatch(Decrease());
  }
}
