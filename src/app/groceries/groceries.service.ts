import { EventEmitter } from '@angular/core';

import { Groceries } from './groceries.model';

export class GroceryService {
    itemSelected = new EventEmitter<Groceries>();

  private groceries: Groceries[] = [
    new Groceries('1', 'Milk', 'Dairy', 2, 1.5, false),
    new Groceries('2', 'Bread', 'Bakery', 1, 2.0, false),
    new Groceries('3', 'Eggs', 'Dairy', 12, 3.0, false),
    new Groceries('4', 'Apples', 'Produce', 6, 0.5, false),
    new Groceries('5', 'Chicken', 'Meat', 1, 5.0, false),
  ];

  getGroceries() {
    return this.groceries.slice();
  }
}
