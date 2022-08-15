import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter;
  counter: number = 0;
  counter$: Observable<{ counter: number }>;
  // counterSubscription: Subscription;
  constructor(private store: Store<{ counterModule: CounterState }>) {}

  ngOnInit(): void {
    // this.counterSubscription = this.store
    //   .select('counterModule')
    //   .subscribe((data) => {
    //     this.counter = data.counter;
    //   });
    this.counter$ = this.store.select('counterModule');
  }
  // ngOnDestroy(): void {
  //   this.counterSubscription.unsubscribe();
  // }
}
