import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  DRINKS_FEATURE_KEY,
  drinksAdapter,
  DrinksPartialState,
  DrinksState
} from './drinks.reducer';

// Lookup the 'Drinks' feature state managed by NgRx
export const selectDrinksState = createFeatureSelector<
  DrinksPartialState,
  DrinksState
>(DRINKS_FEATURE_KEY);

const { selectAll, selectEntities } = drinksAdapter.getSelectors();

export const selectDrinksLoading = createSelector(
  selectDrinksState,
  (state: DrinksState) => state.isLoading
);

export const selectAllDrinks = createSelector(
  selectDrinksState,
  (state: DrinksState) => selectAll(state)
);

export const selectDrinksEntities = createSelector(
  selectDrinksState,
  (state: DrinksState) => selectEntities(state)
);

export const selectDrinkId = createSelector(
  selectDrinksState,
  (state: DrinksState) => state.selectedDrinkId
);

export const selectDrink = createSelector(
  selectDrinksEntities,
  selectDrinkId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
