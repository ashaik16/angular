import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCounter } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  inputCounter: number;
  constructor(private store: Store<{ counterModule: CounterState }>) {}

  ngOnInit(): void {}
  onAddCounter() {
    this.store.dispatch(customCounter({ inputCounter: +this.inputCounter }));
  }
}
