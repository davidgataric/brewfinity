import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private beer = {id: -1, name: 'undefined', image: '', price: 0.00, oldPrice: 0.00};

  constructor(private router: Router) {
  }

  ngOnInit() {
    try {
      this.beer = history.state.data.beerProduct;
    } catch (e) {
      this.router.navigateByUrl('home');
    }
  }

}
