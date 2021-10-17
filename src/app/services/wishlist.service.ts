import { Injectable } from '@angular/core';
import {wishListUrl} from '../config/api';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishList(){
return this.http.get(wishListUrl).pipe(
  //ova od localhosti wish list pretvorat vo niza
  map((result: any[]) =>{
    let productIds= [];
result.forEach(item => productIds.push(item.id))
    return productIds;
  })
)
  }

  addToWishlist(productId){
return this.http.post(wishListUrl,{id:productId})
  }

  removeFromWishList(productId){
return this.http.delete(wishListUrl + '/' + productId);
  }
}
