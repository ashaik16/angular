import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { customCounter, customName } from '../state/counter.action';
import { getName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  inputCounter: number;
  //name: String;
  name$: Observable<String>;
  constructor(private store: Store<{ counterModule: CounterState }>) {}

  ngOnInit(): void {
    // this.store.select(getName).subscribe((namevar) => {
    //   console.log('Channel Name Observable called');
    //   this.name = namevar;d
    // });

    this.name$ = this.store.select(getName);
  }
  onAddCounter() {
    this.store.dispatch(customCounter({ inputCounter: +this.inputCounter }));
  }
  onChangeName() {
    this.store.dispatch(customName());
  }
}
