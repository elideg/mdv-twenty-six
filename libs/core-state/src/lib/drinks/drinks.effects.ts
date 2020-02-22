import { NotifyService } from './../../../../core-data/src/lib/notify.service';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';


import * as drinksActions from './drinks.actions';
import { Drink, DrinksService } from '@mdv-twenty-six/core-data';
import { DrinksPartialState } from './drinks.reducer';

@Injectable()
export class DrinksEffects {
  loadDrinks$ = createEffect(() =>
    this.dataPersistence.fetch(drinksActions.loadDrinks, {
      run: (
        action: ReturnType<typeof drinksActions.loadDrinks>,
        state: DrinksPartialState
      ) => {
        return this.drinksService.all().pipe(
          map((drinks: Drink[]) => drinksActions.drinksLoaded({ drinks }))
        );
      },
      onError: (action: ReturnType<typeof drinksActions.loadDrinks>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addDrink$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(drinksActions.createDrink, {
      run: (
        action: ReturnType<typeof drinksActions.createDrink>,
        state: DrinksPartialState
      ) => {
        return this.drinksService.create(action.drink).pipe(
          map((drink: Drink) => drinksActions.drinkCreated({ drink })),
          tap(() => this.notify.notify('Successfully Added a Drink'))
        );
      },
      onError: (action: ReturnType<typeof drinksActions.createDrink>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateDrink$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(drinksActions.updateDrink, {
      run: (
        action: ReturnType<typeof drinksActions.updateDrink>,
        state: DrinksPartialState
      ) => {
        return of(action.drink).pipe(
          map((drink: Drink) => drinksActions.drinkUpdated({ drink })),
          tap(() => this.notify.notify('Successfully Updated a Drink'))
        );
      },
      onError: (action: ReturnType<typeof drinksActions.updateDrink>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteDrink$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(drinksActions.deleteDrink, {
      run: (
        action: ReturnType<typeof drinksActions.deleteDrink>,
        state: DrinksPartialState
      ) => {
        return of(action.drink).pipe(
          map((drink: Drink) => drinksActions.drinkDeleted({ drink })),
          tap(() => this.notify.notify('Successfully Deleted a Drink'))
        );
      },
      onError: (action: ReturnType<typeof drinksActions.deleteDrink>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<DrinksPartialState>,
    private drinksService: DrinksService,
    private notify: NotifyService
  ) {}
}
