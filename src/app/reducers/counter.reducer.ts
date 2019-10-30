import { Action } from '@ngrx/store';

import * as CounterActions from '../actions/counter.actions';
import { Counter } from '../models/counter.model';

const initialStateValue: Counter = {
  firstValue: -5,
  secondValue: 10
};

export function reducer(state: Counter = initialStateValue, action: Action) {
  switch (action.type) {
    case CounterActions.CounterActionTypes.Increase:
      return {
        ...state,
        firstValue: state.firstValue + 1
      };
    case CounterActions.CounterActionTypes.Decrease:
      return {
        ...state,
        secondValue: state.secondValue - 1
      };
    case CounterActions.CounterActionTypes.Change:
      return state;
    case CounterActions.CounterActionTypes.Reset:
      return { ...initialStateValue };
    default:
      return state;
  }
}
