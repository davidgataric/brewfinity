import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../types/product';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.css']
})
export class ShoppingCartButtonComponent implements OnInit {

  private shoppingCart: Array<Product>;
  public priceSum;

  constructor(private productService: ProductService) {
  }

  async ngOnInit() {
    this.productService.shoppingCartState$.subscribe(async () => {
      await this.updateShoppingCart();
    });
    await this.updateShoppingCart();
  }

  private async updateShoppingCart() {
    this.shoppingCart = await this.productService.getShoppingCartValue();
    this.sumPrice();
  }

  private sumPrice() {
    let sum = 0.00;
    for (const product of this.shoppingCart) {
      sum += product.price;
    }
    this.priceSum = sum;
  }


}
