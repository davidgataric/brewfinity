import {Component, OnInit} from '@angular/core';

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
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
