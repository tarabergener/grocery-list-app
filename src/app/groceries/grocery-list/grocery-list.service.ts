import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Groceries } from '../groceries.model';

@Injectable({
  providedIn: 'root',
})
export class GroceryListService {
  private groceries: Groceries[] = [
    new Groceries('1', 'Milk', 'Dairy', 2, 1.5, false),
    new Groceries('2', 'Bread', 'Bakery', 1, 2.0, false),
    new Groceries('3', 'Eggs', 'Dairy', 12, 3.0, false),
    new Groceries('4', 'Apples', 'Produce', 6, 0.5, false),
    new Groceries('5', 'Chicken', 'Meat', 1, 5.0, false),
  ];

  private groceriesSubject = new BehaviorSubject<Groceries[]>(
    this.groceries.slice(),
  );
  groceries$ = this.groceriesSubject.asObservable();

  getGroceries(): Observable<Groceries[]> {
    return this.groceries$;
  }

  addGrocery(grocery: Groceries): void {
    this.groceries.push(grocery);
    this.sortGroceries();
    this.groceriesSubject.next(this.groceries.slice());
  }

  setPurchased(itemId: string, purchased: boolean): void {
    const grocery = this.groceries.find((g) => g.id === itemId);
    if (!grocery) {
      return;
    }
    grocery.purchased = purchased;
    this.sortGroceries();
    this.groceriesSubject.next(this.groceries.slice());
  }

  private sortGroceries(): void {
    this.groceries.sort((a, b) => {
      if (a.purchased === b.purchased) {
        return 0;
      }
      return a.purchased ? 1 : -1;
    });
  }
}
