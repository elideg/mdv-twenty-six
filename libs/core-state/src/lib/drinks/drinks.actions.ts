import { createAction, props } from '@ngrx/store';

import { Drink } from '@mdv-twenty-six/core-data';

export const drinkSelected = createAction(
  '[DRINK] Drink Selected',
  props<{ selectedDrinkId: string }>()
);

// Load Actions
export const loadDrinks = createAction('[DRINK] Load Drinks');

export const drinksLoaded = createAction(
  '[DRINK] Drinks Loaded',
  props<{ drinks: Drink[] }>()
);

// Create Actions
export const createDrink = createAction(
  '[DRINK] Create Drink',
  props<{ drink: Drink }>()
);

export const drinkCreated = createAction(
  '[DRINK] Drink Created',
  props<{ drink: Drink }>()
);

// Update Actions
export const updateDrink = createAction(
  '[DRINK] Update Drink',
  props<{ drink: Drink }>()
);

export const drinkUpdated = createAction(
  '[DRINK] Drink Updated',
  props<{ drink: Drink }>()
);

// Delete Actions
export const deleteDrink = createAction(
  '[DRINK] Delete Drink',
  props<{ drink: Drink }>()
);

export const drinkDeleted = createAction(
  '[DRINK] Drink Deleted',
  props<{ drink: Drink }>()
);
