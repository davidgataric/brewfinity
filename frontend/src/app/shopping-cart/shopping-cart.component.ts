import {Component, OnInit} from '@angular/core';
import {Product} from '../types/product';
import {ProductService} from '../services/product.service';
import {ProductInCart} from '../types/productInCart';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    private allProducts: Array<Product> = [];
    private shoppingCart: Array<Product> = [];
    private productsInCartDistinct: Array<ProductInCart> = [];
    private sumCHF: number;

    displayedColumns: string[] = ['Produktname', 'Einzelpreis', 'Anzahl', 'Total'];

    constructor(private productService: ProductService) {
    }

    async ngOnInit() {
        await this.loadData();
    }


    private distinctProducts() {
        let currentProductName = '';
        for (let product of this.allProducts) {

            currentProductName = product.name;

            let count = 0;

            for (let productCart of this.shoppingCart) {
                if (product.name === productCart.name) {
                    count++;
                }
            }

            const productInCart = {
                name: currentProductName,
                price: product.price,
                amount: count,
                total: product.price * count
            };

            this.productsInCartDistinct.push(productInCart);

        }
    }

    private removeNonBuyedItems(productList: Array<ProductInCart>) {
        let count = 0;
        for (let product of this.productsInCartDistinct) {
            if (product.amount === 0) {
                this.productsInCartDistinct.splice(count, 1);
                this.removeNonBuyedItems(this.productsInCartDistinct);
            }
            count++;
        }
    }

    private async loadData() {
        await this.productService.getProducts().then(async (allProducts) => {
            this.allProducts = allProducts;
            await this.productService.getShoppingCartValue().then(async (products) => {
                this.shoppingCart = products;
                this.distinctProducts();
                this.removeNonBuyedItems(this.productsInCartDistinct);
                this.sumCHF = this.count('total');
            });
        });
    }

    private count(key: string) {
        return this.productsInCartDistinct.reduce((a, b) => a + (b[key] || 0), 0);
    }
}
