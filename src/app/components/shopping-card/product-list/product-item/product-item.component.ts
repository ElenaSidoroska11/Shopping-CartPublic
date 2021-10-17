import { Component, OnInit ,Input } from '@angular/core';
import {Product} from '../../../../models/product';
import {MessengerService} from '../../../../services/messenger.service';
import {CartService} from '../../../../services/cart.service';
import {WishlistService} from '../../../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input() productItem :Product
  @Input() addedToWishList:boolean;
  constructor(private msg: MessengerService,
              private cartService:CartService,
              private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
handleAddToCart(){
   this.cartService.addProductToCart(this.productItem).subscribe(()=> {
     this.msg.sendMsg(this.productItem);
   })
}

handleAddToWishList(){
this.wishlistService.addToWishlist(this.productItem.id).subscribe(()=>{
  this.addedToWishList= true;
  })
}

handRemoveFromWishList(){
this.wishlistService.removeFromWishList(this.productItem.id).subscribe(()=>{
  this.addedToWishList=false;
})
}
}
