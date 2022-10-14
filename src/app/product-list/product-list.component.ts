import { Component, OnInit } from '@angular/core';
import {products, Product} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products  = products;
  constructor() { }

  ngOnInit(): void {
  }

  share(){
    console.log('The product has been shared!');
  }

}
