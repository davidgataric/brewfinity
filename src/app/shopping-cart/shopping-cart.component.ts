import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  dataSource = [{produktname: '', einzelpreis: '', anzahl: ''}];
  displayedColumns: string[] = ['Produktname', 'Einzelpreis', 'Anzahl'];

  constructor() {
  }

  ngOnInit() {
  }

}
