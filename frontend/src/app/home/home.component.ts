import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../types/product';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public count = 0;
    public products: Array<Product> = new Array<Product>();

    constructor(private router: Router,
                private productService: ProductService) {
    }

    async ngOnInit() {
        this.products = await this.productService.getProducts();
    }

    openDetails(beer: any) {
        this.router.navigateByUrl('detail', {state: {data: {beerProduct: beer}}});
    }

    clickedSomething() {
        if (this.count === 10) {
            this.router.navigateByUrl('detail', {
                state: {
                    data: {
                        beerProduct: {
                            id: 1000,
                            name: 'Serbischer Pass',
                            image: '../../assets/img/secret.png',
                            price: 3089.99,
                            oldPrice: 9999.99
                        }
                    }
                }
            });
        }
        this.count++;
    }
}
