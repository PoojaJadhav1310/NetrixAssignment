import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemsComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { 
  
}

