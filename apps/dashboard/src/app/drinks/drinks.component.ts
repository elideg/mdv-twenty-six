import { DrinksFacade } from '@mdv-twenty-six/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Drink } from '@mdv-twenty-six/core-data';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-twenty-six-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  form: FormGroup;
  selectedDrink$: Observable<Drink> = this.drinksFacade.selectedDrink$;
  drinks$: Observable<Drink[]> = this.drinksFacade.allDrinks$;

  constructor(
      private fb: FormBuilder,
      private drinksFacade: DrinksFacade
  ) { }

  ngOnInit() {
      this.initForm();
      this.drinksFacade.loadDrinks();
      this.selectDrink({ id: null } as Drink);
  }

  selectDrink(drink: Drink) {
      this.form.patchValue(drink);
      this.drinksFacade.selectDrink(drink.id);
  }

  cancel() {
      this.selectDrink({ id: null } as Drink);
      this.form.reset();
  }

  saveDrink(formDirective: FormGroupDirective) {
      if (this.form.invalid) return;
      if (this.form.value.id) {
          this.drinksFacade.updateDrink(this.form.value);
          this.selectDrink({ id: null } as Drink);
      } else {
          this.drinksFacade.createDrink(this.form.value);
          this.selectDrink({ id: null } as Drink);
      }
  }

  deleteDrink(drink: Drink) {
      this.drinksFacade.deleteDrink(drink);
  }

  initForm() {
      this.form = this.fb.group({
          id: [''],
          name: ['', Validators.compose([Validators.required])],
          caffeine: ['', Validators.compose([Validators.required])],
          sugar: [''],
          founder: ['']
      })
  }

}
