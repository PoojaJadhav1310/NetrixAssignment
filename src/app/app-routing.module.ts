import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';


const routes: Routes = [
  {
    path: '',
    component: ShoppingItemsComponent
  },
  {
    path: 'cartItems',
    component: CartItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 


}
