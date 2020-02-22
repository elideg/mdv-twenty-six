import { Drink } from './drink';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import * as uuid from 'uuid/v1';
import { of } from 'rxjs';

const BASE_URL = 'https://level-up-api-zderqmkwsj.now.sh'

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
model = 'drinks'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(drink: Drink) {
    return of({ id: uuid(), ...drink})
  }

  delete(drink: Drink) {
    return this.httpClient.delete(this.getUrlForId(drink.id));
  }

  update(drink: Drink) {
    return this.httpClient.put(this.getUrlForId(drink.id), drink);
  }
}
