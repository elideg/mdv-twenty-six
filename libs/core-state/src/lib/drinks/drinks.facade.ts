import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromDrinks from './drinks.reducer';
import * as drinksActions from './drinks.actions';
import * as drinksSelectors from './drinks.selectors';
import { Drink } from '@mdv-twenty-six/core-data';

@Injectable({
  providedIn: 'root'
})
export class DrinksFacade {
  allDrinks$ = this.store.pipe(select(drinksSelectors.selectAllDrinks));
  selectedDrink$ = this.store.pipe(select(drinksSelectors.selectDrink));
  drinkLoading$ = this.store.pipe(select(drinksSelectors.selectDrinksLoading));

  constructor(private store: Store<fromDrinks.DrinksPartialState>) {}

  selectDrink(selectedDrinkId: string) {
    this.dispatch(drinksActions.drinkSelected({ selectedDrinkId }));
  }

  loadDrinks() {
    this.dispatch(drinksActions.loadDrinks());
  }

  createDrink(drink: Drink) {
    this.dispatch(drinksActions.createDrink({ drink }));
  }

  updateDrink(drink: Drink) {
    this.dispatch(drinksActions.updateDrink({ drink }));
  }

  deleteDrink(drink: Drink) {
    this.dispatch(drinksActions.deleteDrink({ drink }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
