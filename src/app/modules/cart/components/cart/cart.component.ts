import { AfterViewChecked, Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, Item } from 'src/app/models/types/cart-item';
import { CoffeeBeans, CoffeeCup } from 'src/app/models/types/coffee';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements AfterViewChecked {
  cart: CartItem[] = [];
  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCartData
  }
  ngAfterViewChecked(): void {
  }
  isQuantity1(arr: Item[]): boolean {
    return arr.length == 1 ? true : false
  }
}
