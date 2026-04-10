import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Groceries } from '../groceries.model';
import { GroceryService } from '../groceries.service';

@Component({
  selector: 'app-grocery-item',
  standalone: false,
  templateUrl: './grocery-item.component.html',
  styleUrl: './grocery-item.component.css',
})
export class GroceryItemComponent implements OnInit {
  @Input() item: Groceries | undefined;
  @Output() purchasedChanged = new EventEmitter<boolean>();

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {}

  onSelected() {
    this.groceryService.itemSelected.emit(this.item);
  }

  onPurchasedChange(event: any) {
    this.purchasedChanged.emit(event.target.checked);
  }
}
