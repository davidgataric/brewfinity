// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {MatButtonModule, MatGridListModule, MatIconModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ShoppingCartButtonComponent} from './components/shopping-cart-button/shopping-cart-button.component';
import {ProductService} from './services/product.service';
import {CustomHttpInterceptorService} from './http-interceptor';
import {FormsModule} from '@angular/forms';

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
        ShoppingCartButtonComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatTableModule,
        MatSnackBarModule,
        MatIconModule,
        MatGridListModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    providers: [ProductService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpInterceptorService,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
