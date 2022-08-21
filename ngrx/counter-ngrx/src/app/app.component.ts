import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { getLoadingStatus } from './state/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'counter-ngrx';
  showLoading$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.showLoading$ = this.store.select(getLoadingStatus);
  }
}
