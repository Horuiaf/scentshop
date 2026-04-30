import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';   

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService   
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

addToCart(product: any) {
  this.cartService.addToCart({
    title: product.title,
    price: product.price
  }).subscribe(() => {
    alert("Added to cart");
    window.location.reload();   
  });
}
}