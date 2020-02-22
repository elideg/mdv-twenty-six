import { DrinksFacade } from '@mdv-twenty-six/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '@mdv-twenty-six/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-twenty-six-drinks-item',
  templateUrl: './drinks-item.component.html',
  styleUrls: ['./drinks-item.component.scss']
})
export class DrinksItemComponent implements OnInit {
  drinks$: Observable<Drink>;

  constructor(
    private route: ActivatedRoute,
    private drinksFacade: DrinksFacade
  ) { }

  ngOnInit() {
    this.drinksFacade.loadDrinks();
    this.route.params.subscribe((param) => this.drinksFacade.selectDrink(param['id']));
    this.drinks$ = this.drinksFacade.selectedDrink$
  }

}
