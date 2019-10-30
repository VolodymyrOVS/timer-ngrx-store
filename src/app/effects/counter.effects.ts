import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

import * as CounterActions from '../actions/counter.actions';

@Injectable()
export class CounterChangeEffect {
  constructor(private actions$: Actions) { }

  @Effect()
  changeCounters$ = this.actions$
    .pipe(
      ofType<CounterActions.Change>(CounterActions.CounterActionTypes.Change)
    )
    .pipe(
      switchMap(() => {
        return [
          new CounterActions.Increment(),
          new CounterActions.Decrement(),
          new CounterActions.Decrement()
        ];
      })
    );
}
