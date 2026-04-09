import { Component, ViewChild } from '@angular/core';
import { Groceries } from './groceries.model';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@Component({
  selector: 'app-groceries',
  standalone: false,
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.css',
})
export class GroceriesComponent {
  @ViewChild(GroceryListComponent) groceryListComponent: GroceryListComponent;

  selectedItem: Groceries | null = null;
  showAddForm: boolean = false;

  constructor() {}

  onItemSelected(item: Groceries) {
    this.selectedItem = item;
    this.showAddForm = false;
  }

  onAddItem() {
    this.selectedItem = null;
    this.showAddForm = true;
  }

  onItemAdded(grocery: Groceries) {
    this.groceryListComponent.onItemAdded(grocery);
    this.showAddForm = false;
    this.selectedItem = null;
  }
}
