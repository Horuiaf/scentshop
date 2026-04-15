import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  addToCart(item: any) {
    return this.http.post(this.url, item);
  }

  getCart() {
    return this.http.get(this.url);
  }
}