import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [
    {
      id: 1,
      name: 'Tuborg',
      image: '../../assets/img/products/tuborg.jpg',
      price: 3.75,
      oldPrice: 4.95
    },
    {
      id: 2,
      name: 'Nektar',
      image: '../../assets/img/products/nektar.jpg',
      price: 2.55,
      oldPrice: 3.25
    },
    {
      id: 3,
      name: 'Jelen',
      image: '../../assets/img/products/jelen.png',
      price: 2.35,
      oldPrice: 3
    },
    {
      id: 4,
      name: 'Heineken',
      image: '../../assets/img/products/heineken.jpg',
      price: 4.25,
      oldPrice: 6.25
    },
    {
      id: 5,
      name: 'Brewdog Punk IPA',
      image: '../../assets/img/products/brewdog.jpg',
      price: 5.75,
      oldPrice: 7.25
    },
    {
      id: 6,
      name: 'Killer Cucumber Ale',
      image: '../../assets/img/products/cucumber.jpg',
      price: 6,
      oldPrice: 6.50
    },
    {
      id: 7,
      name: 'Eichhof',
      image: '../../assets/img/products/eichhof.jpg',
      price: 1.80,
      oldPrice: 2.35
    },
    {
      id: 8,
      name: 'Crni Ðorđe',
      image: '../../assets/img/products/crni.jpg',
      price: 3.55,
      oldPrice: 4.85
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openDetails(beer: any) {
    this.router.navigateByUrl('detail', {state: {data: {beerProduct: beer}}});
  }
}
