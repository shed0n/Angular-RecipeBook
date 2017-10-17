import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const shoppingRoutes: Routes = [
  { path: '', component: ShoppingListComponent, children: [
    { path: '', component: ShoppingEditComponent, canActivate: [AuthGuard] }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})

export class ShoppingListRoutingModule {}
