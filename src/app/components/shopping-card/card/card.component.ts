import { Component, OnInit } from '@angular/core';
import {MessengerService} from '../../../services/messenger.service';
import {Product} from '../../../models/product';
import {CartService} from '../../../services/cart.service';
import {CartItem} from '../../../models/cart-item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
cartItems=[
  //{id:1,productId:1,productName:'Test1',qty:4 ,price:100 },
  //{id:2,productId:2,productName:'Test2',qty:5 ,price:1001 },
  //{id:3,productId:3,productName:'Test3',qty:6 ,price:1002},
  //{id:4,productId:4,productName:'Test4',qty:8,price:1003},
];
cartTotal=0;

  constructor(private msg: MessengerService,private cartService:CartService) { }

  ngOnInit() {
this.handleSubscription();
this.loadCartItems();
  }


  handleSubscription(){
    this.msg.getMsg().subscribe((product :Product) => {
    this.loadCartItems()
    })
  }
  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
     this.cartItems = items;
     this.calcCartTotal();
    })
  }

//addProductToCart(product:Product){

   // let productExists=false;

  //for (let i in this.cartItems) {
  //  if (this.cartItems[i].productId === product.id) {
   //   this.cartItems[i].qty++;
    //  productExists=true;
    //  break;
   // }
  //}
  //  if(!productExists){
  //    this.cartItems.push({
  //    productId: product.id,
    //  productName: product.name,
   //   qty:1,
   //    price: product.price
    //  })
   // }
//this.calcCartTotal()
//}

calcCartTotal(){
  this.cartTotal=0;
  this.cartItems.forEach(item=>{
    this.cartTotal +=(item.qty* item.price)
  })
}
}
