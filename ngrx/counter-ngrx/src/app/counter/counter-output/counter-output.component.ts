import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // @Input() counter;
  counter: number = 0;
  counterSubscription: Subscription;
  constructor(private store: Store<{ counterModule: CounterState }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select('counterModule')
      .subscribe((data) => {
        this.counter = data.counter;
      });
  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
