import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { GroceryCategoriesComponent } from './groceries/grocery-categories/grocery-categories.component';
import { GroceryItemComponent } from './groceries/grocery-item/grocery-item.component';
import { CouponsComponent } from './coupons/coupons.component';
import { GroceryListComponent } from './groceries/grocery-list/grocery-list.component';
import { GroceriesEditComponent } from './groceries/groceries-edit/groceries-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroceriesComponent,
    GroceryCategoriesComponent,
    GroceryItemComponent,
    CouponsComponent,
    GroceryListComponent,
    GroceriesEditComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
