import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private beer = {id: 2, name: 'Undefined', image: '', price: 0, oldPrice: 0};

  constructor() {
  }

  ngOnInit() {
    this.beer = history.state.data.beerProduct;
  }

}
