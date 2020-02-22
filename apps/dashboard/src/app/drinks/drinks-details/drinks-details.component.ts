import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Drink } from '@mdv-twenty-six/core-data';

@Component({
  selector: 'mdv-twenty-five-drinks-details',
  templateUrl: './drinks-details.component.html',
  styleUrls: ['./drinks-details.component.scss']
})
export class DrinksDetailsComponent implements OnInit {
  originalName;
  currentDrink: Drink

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set drink(value) {
    if (value) this.originalName = value.name;
      this.currentDrink = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(drink: Drink) {
    this.saved.emit(drink);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
