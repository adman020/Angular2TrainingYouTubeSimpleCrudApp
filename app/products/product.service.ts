import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCT_ITEMS } from './product-data';


@Injectable() 
export class ProductService {
    private pitems = PRODUCT_ITEMS;


    getProductsFromData(): Product[] {
        console.log(this.pItems);
        return this.pItems;
    }

    /*getProductsFromService(): Product[] {
    return [{
        id:1,
        name: 'Scissors',
        description: 'Use this to cust stuff',
        price: 4.99
    },{
    id:2,
        name: 'Steak Knives',
        description: 'Use this to eat food with',
        price: 10.99
    },{
    id:3,
        name: 'Shot Glasses',
        description: 'Use this to take shots',
        price: 5.99
    }]
    }*/
}