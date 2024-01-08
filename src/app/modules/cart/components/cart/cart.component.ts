import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, Item } from 'src/app/models/types/cart-item';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: CartItem[];
  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCartData
  //   this.cartService.cartObservable.subscribe({
  //     next: (data: CartItem) => this.cart.push(data),
  //     error: (err: Error) => console.error(err),
  //     complete: () => { }
  //   })
  }
  isQuantity1(arr: Item[]): boolean {
    return arr.length == 1 ? true : false
  }
}
