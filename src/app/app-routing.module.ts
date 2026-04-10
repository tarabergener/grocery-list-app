import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesComponent } from './groceries/groceries.component';
import { CouponsComponent } from './coupons/coupons.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/groceries', pathMatch: 'full' },
    { path: 'groceries', component : GroceriesComponent },
    { path: 'coupons', component : CouponsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}