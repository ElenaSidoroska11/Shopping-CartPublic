import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from 'src/app/models/product';
import {WishlistService} from '../../../services/wishlist.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList:Product[] = [];
wishlist: number[] =[]
  constructor(private productService: ProductService,
              private wishlistService: WishlistService) { }

  ngOnInit() {
   this.loadProducts();
   this.loadWishlist();
}
loadProducts(){
  this.productService.getProducts().subscribe((products)=>{
    this.productList=products;
  })
}
loadWishlist(){
this.wishlistService.getWishList().subscribe(productIds=>{
    this.wishlist= productIds;
  })
}
}
