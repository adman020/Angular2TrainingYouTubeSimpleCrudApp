import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';

@Component({
    moduleId: module.id,
    templateUrl: 'home.template.html'
})

export class ProductComponent implements OnInit {
    products:Product[];

    constructor(private _productService: ProductService) {}

    ngOninit() {
        this.getProducts();
    }

    getProducts() {
        this.products = this._productService.getProductsFromData();
    }

}
