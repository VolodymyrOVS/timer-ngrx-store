import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectCounterState = (state: AppState) => state.counter;

export const getFirstValue = createSelector(
    selectCounterState,
    (counter) => counter.firstValue
);

export const getSecondValue = createSelector(
    selectCounterState,
    (counter) => counter.secondValue
);
