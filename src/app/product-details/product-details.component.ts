import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  products = products;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    let productId = Number(routeParams.get('productId'));
    this.product = products.find(prod => prod.id == productId);
  }
}
