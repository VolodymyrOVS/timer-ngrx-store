import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';

import { AppState } from '../app.state';
import * as CounterActions from '../actions/counter.actions';
import { getFirstValue, getSecondValue } from '../selectors/counter.selectors';

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart-component.component.html',
  styleUrls: ['./smart-component.component.scss']
})
export class SmartComponentComponent implements OnInit, OnDestroy {
  public counterValue1$: Observable<number>;
  public counterValue2$: Observable<number>;

  public timerInstance$: Observable<number>;

  private subscriptionForTimer: Subscription;

  constructor(private store: Store<AppState>) {
    this.counterValue1$ = store.select(getFirstValue);
    this.counterValue2$ = store.select(getSecondValue);

    this.timerInstance$ = timer(1000, 1000);
  }

  public ngOnInit(): void { }

  public onStartTimerFunc(): void {
    if (this.subscriptionForTimer && this.subscriptionForTimer.closed || !this.subscriptionForTimer) {
      this.subscriptionForTimer = this.timerInstance$.subscribe((n: number) => {
        this.store.dispatch(new CounterActions.Change());
      });
    }
  }

  public onStopFunc(): void {
    this.subscriptionForTimer.unsubscribe();
  }

  public onResetFunc(): void {
    this.store.dispatch(new CounterActions.Reset());
  }

  public ngOnDestroy(): void {
    this.subscriptionForTimer.unsubscribe();
  }
}
