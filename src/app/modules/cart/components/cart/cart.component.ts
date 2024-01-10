import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, Item } from 'src/app/models/types/cart-item';
import { Price } from 'src/app/models/types/size';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: CartItem[];
  totalPrice: Price
  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCartData
    //   this.cartService.cartObservable.subscribe({
    //     next: (data: CartItem) => this.cart.push(data),
    //     error: (err: Error) => console.error(err),
    //     complete: () => { }
    //   })
    this.totalPrice = cartService.getTotal
  }
  isQuantity1(arr: Item[]): boolean {
    let arr2: boolean[] = []
    arr.forEach((e: Item) => {
      e.quantity === 1 ? arr2.push(true) : false
    })
    return arr2.length === 1 ? true : false
  }
}
