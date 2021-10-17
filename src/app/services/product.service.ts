import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {productsUrl} from 'src/app/config/api';
import {Product} from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
//products: Product[]=[
 // new Product(1,'Product1' ,'Volks1' ,100),
 // new Product(2,'Product2' ,'Volks2' ,1000),
 // new Product(3,'Product3' ,'Volks3' ,10000),
  //new Product(4,'Product4' ,'Volks4' ,100000),
  //new Product(5,'Product5' ,'Volks5' ,1000000),
  //new Product(6,'Product6' ,'Volks6' ,10000000),
  //new Product(7,'Product7' ,'Volks7' ,100000000),
//]
  constructor(private http:HttpClient) { }

  //Populate products from an Api and return an Observable
  getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(productsUrl);
  }
}
