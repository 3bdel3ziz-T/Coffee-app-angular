import { AfterViewChecked, Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, Item } from 'src/app/models/types/cart-item';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements AfterViewChecked {
  cartArr: CartItem[];
  constructor(private cartService: CartService) {
    this.cartArr = this.cartService.getCartArr
  }
  ngAfterViewChecked(): void {
  }
  isQuantity1(arr: Item[]): boolean {
    return arr.length == 1 ? true : false
  }
}
