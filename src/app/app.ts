import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { ProductList } from './components/product-list/product-list';
import { Footer } from './components/footer/footer';
import { Cart } from './components/cart/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, ProductList, Footer, Cart], 
  templateUrl: './app.html'
})
export class App {}