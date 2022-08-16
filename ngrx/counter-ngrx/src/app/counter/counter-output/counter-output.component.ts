import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // counter: number = 0;
  counter$: Observable<number>;
  constructor(private store: Store<{ counterModule: CounterState }>) {}

  ngOnInit(): void {
    // this.store.select(getCounter).subscribe((countervar) => {
    //   console.log(' Counter Observable called');
    //   this.counter = countervar;
    // });

    this.counter$ = this.store.select(getCounter);
  }
}
