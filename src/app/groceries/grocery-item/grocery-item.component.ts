import { Component, OnInit } from '@angular/core';

import { Groceries } from '../groceries.model';

@Component({
  selector: 'app-grocery-item',
  standalone: false,
  templateUrl: './grocery-item.component.html',
  styleUrl: './grocery-item.component.css'
})
export class GroceryItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
