// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {MatButtonModule, MatGridListModule, MatIconModule, MatTableModule} from '@angular/material';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'detail',
    component: ProductDetailComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
