import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
