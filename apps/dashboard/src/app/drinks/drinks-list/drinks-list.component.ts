import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Drink } from '@mdv-twenty-six/core-data';

@Component({
  selector: 'mdv-twenty-five-drink-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {
  @Input() drinks: Drink[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(drink: Drink) {
    this.selected.emit(drink);
  }

  delete(drink: Drink) {
    this.deleted.emit(drink);
  }
}
