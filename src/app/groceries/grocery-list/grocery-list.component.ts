import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Groceries } from '../groceries.model';

@Component({
  selector: 'app-grocery-list',
  standalone: false,
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
})
export class GroceryListComponent implements OnInit {
  groceries: Groceries[] = [
    new Groceries('1', 'Milk', 'Dairy', 2, 1.5, false),
    new Groceries('2', 'Bread', 'Bakery', 1, 2.0, false),
    new Groceries('3', 'Eggs', 'Dairy', 12, 3.0, false),
    new Groceries('4', 'Apples', 'Produce', 6, 0.5, false),
    new Groceries('5', 'Chicken', 'Meat', 1, 5.0, false),
  ];

  @Output() itemWasSelected = new EventEmitter<Groceries>();
  @Output() addItem = new EventEmitter<void>();
  @Output() itemAdded = new EventEmitter<Groceries>();

  constructor() {}

  ngOnInit(): void {}

  onGrocerySelected(grocery: Groceries) {
    console.log('Selected grocery:', grocery);
    this.itemWasSelected.emit(grocery);
  }

  onAddItem() {
    this.addItem.emit();
  }

  onPurchasedChanged(checked: boolean, item: Groceries) {
    item.purchased = checked;
    this.sortGroceries();
  }

  onItemAdded(grocery: Groceries) {
    this.groceries.push(grocery);
    this.sortGroceries();
    this.itemAdded.emit(grocery);
  }

  sortGroceries() {
    this.groceries.sort((a, b) => {
      if (a.purchased === b.purchased) return 0;
      return a.purchased ? 1 : -1;
    });
  }
}
