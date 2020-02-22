import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as drinksActions from './drinks.actions';
import { Drink } from '@mdv-twenty-six/core-data';

export const DRINKS_FEATURE_KEY = 'drinks';

export interface DrinksState extends EntityState<Drink> {
  selectedDrinkId?: string | number;
  isLoading: boolean;
}

export interface DrinksPartialState {
  readonly [DRINKS_FEATURE_KEY]: DrinksState;
}

export const drinksAdapter: EntityAdapter<Drink> = createEntityAdapter<Drink>();

export const initialState: DrinksState = drinksAdapter.getInitialState({
  // set initial required properties
  selectedDrinkId: null,
  isLoading: false
});

const drinksReducer = createReducer(
  initialState,
  on(drinksActions.drinkSelected, (state, { selectedDrinkId }) =>
    Object.assign({}, state, { selectedDrinkId })
  ),
  on(drinksActions.drinksLoaded, (state, { drinks }) =>
    drinksAdapter.addAll(drinks, { ...state, isLoading: false })
  ),
  on(drinksActions.drinkCreated, (state, { drink }) =>
    drinksAdapter.addOne(drink, { ...state, isLoading: false })
  ),
  on(drinksActions.drinkUpdated, (state, { drink }) =>
    drinksAdapter.upsertOne(drink, { ...state, isLoading: false })
  ),
  on(drinksActions.drinkDeleted, (state, { drink }) =>
    drinksAdapter.removeOne(drink.id, { ...state, isLoading: false })
  ),
  on(
    drinksActions.loadDrinks,
    drinksActions.createDrink,
    drinksActions.updateDrink,
    drinksActions.deleteDrink,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: DrinksState | undefined, action: Action) {
  return drinksReducer(state, action);
}
