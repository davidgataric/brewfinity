import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../types/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  public shoppingCartState$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {
  }

  public async getProducts() {
    return await this.http.get<Array<Product>>('http://localhost:8080/api/products').toPromise();
  }

  public async getShoppingCartValue() {
    return await this.http.get<Array<Product>>('http://localhost:8080/api/shopping-cart').toPromise();
  }

  public async addProductToShoppingCart(product: Product) {
    await this.http.post('http://localhost:8080/api/shopping-cart', product, {responseType: 'text'}).toPromise();
    this.shoppingCartState$.next();
  }

  public async removeProductFromShoppingCart(product: Product) {
    await this.http.post('http://localhost:8080/api/shopping-cart/remove-item', product, {responseType: 'text'}).toPromise();
    this.shoppingCartState$.next();
  }

  public async emptyShoppingCart(firstname: string, lastname: string, email: string) {
    const form = {
      firstname: firstname,
      lastname: lastname,
      email: email
    };
    await this.http.post('http://localhost:8080/api/shopping-cart/empty', form, {responseType: 'text'}).toPromise();
    this.shoppingCartState$.next();
  }
}
