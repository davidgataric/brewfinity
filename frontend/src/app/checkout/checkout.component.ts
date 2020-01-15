import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    public firstName = '';
    public lastName = '';
    public email = '';

    constructor(private _snackBar: MatSnackBar,
                private productService: ProductService) {
    }

    ngOnInit() {
    }

    public confirmCheckout() {
        if (this.isInputValid()) {
            this.productService.emptyShoppingCart();
            this._snackBar.open('Ihr Einkauf wurde getätigt!', '', {
                duration: 2000,
            });
        }
    }

    private isInputValid(): boolean {

        if (this.firstName !== '' &&
            this.lastName !== '' &&
            this.email !== ''
        ) {
            return true;
        }

        return false;
    }
}
