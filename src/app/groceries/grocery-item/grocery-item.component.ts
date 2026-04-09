import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Groceries } from '../groceries.model';

@Component({
  selector: 'app-grocery-item',
  standalone: false,
  templateUrl: './grocery-item.component.html',
  styleUrl: './grocery-item.component.css',
})
export class GroceryItemComponent implements OnInit {
  @Input() item: Groceries | null = null;
  @Output() grocerySelected = new EventEmitter<void>();
  @Output() purchasedChanged = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.grocerySelected.emit();
  }

  onPurchasedChange(event: any) {
    this.purchasedChanged.emit(event.target.checked);
  }
}
