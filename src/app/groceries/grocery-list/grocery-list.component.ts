import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Groceries } from '../groceries.model';
import { GroceryListService } from './grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  standalone: false,
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
})
export class GroceryListComponent implements OnInit, OnDestroy {
  groceries: Groceries[] = [];

  @Output() addItem = new EventEmitter<void>();
  @Output() itemAdded = new EventEmitter<Groceries>();

  private groceriesSub: Subscription | undefined;

  constructor(private groceryListService: GroceryListService) {}

  ngOnInit(): void {
    this.groceriesSub = this.groceryListService
      .getGroceries()
      .subscribe((items) => {
        this.groceries = items;
      });
  }

  onAddItem() {
    this.addItem.emit();
  }

  onPurchasedChanged(checked: boolean, item: Groceries) {
    if (item && item.id) {
      this.groceryListService.setPurchased(item.id, checked);
    }
  }

  onItemAdded(grocery: Groceries) {
    this.groceryListService.addGrocery(grocery);
    this.itemAdded.emit(grocery);
  }

  ngOnDestroy(): void {
    this.groceriesSub?.unsubscribe();
  }
}
