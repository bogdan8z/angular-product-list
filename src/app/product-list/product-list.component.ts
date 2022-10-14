import { Component, OnInit } from '@angular/core';
import {products, Product} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products  = products;
  share(){
    console.log('The product has been shared!');
  }
  onNotif(){
    console.log('notified!');
  }

}
