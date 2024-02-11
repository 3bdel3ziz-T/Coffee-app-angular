import { Component } from '@angular/core';
import { CartItem, AmountItem, ItemRef } from 'src/app/models/types/cart-item';
import { Price, SizeOrDose } from 'src/app/models/types/size';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SubTitleDirective } from '../../../../custom_directives/sub-title.directive';
import { BtnShapeDirective } from '../../../../custom_directives/btn-shape.directive';
import { PriceComponent } from '../../../shared/components/price/price.component';
import { NgStyle, NgIf } from '@angular/common';
import { ProductItemComponent } from '../../../shared/components/product-item/product-item.component';
import { Id } from 'src/app/models/types/coffee';
import { MenuBarComponent } from 'src/app/app_sections/shared/components/menu-bar/menu-bar.component';
import { MsgComponent } from 'src/app/app_sections/shared/components/msg/msg.component';
import { PaymentComponent } from './payment/payment.component';
import { TitleBarComponent } from 'src/app/app_sections/shared/components/title-bar/title-bar.component';
import { CartService } from '../../services/cart.service';
import { OrderRef } from 'src/app/models/types/order-history';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  imports: [ProductItemComponent, NgStyle, NgIf, PriceComponent, BtnShapeDirective, SubTitleDirective, RouterOutlet, MenuBarComponent, MsgComponent, RouterLink, RouterOutlet, PaymentComponent, TitleBarComponent]
})
export class CartComponent {
  cart!: CartItem[];
  constructor(private cartService: CartService) {
    this.cartService.cartObservable.subscribe({
      next: (itemRef: ItemRef[]) => this.cart = this.cartService.getCartItemsByRefArr(itemRef),
      error: (err: Error) => console.error(err),
      complete: () => { }
    })
  }
  qtyCount(arr: AmountItem[]): number {
    return this.cartService.qtyCount(arr)
  }
  isQty1(arr: AmountItem[]): boolean {
    return this.qtyCount(arr) === 1 ? true : false
  }

  getTotal(cart: CartItem[]): Price {
    return this.cartService.getTotal(cart)
  }

  incrementQty(id: Id, clickedSize: SizeOrDose) {
    this.cartService.changeQty("increment", id, clickedSize)
    this.getTotal(this.cart)
  }
  decrementQty(id: Id, clickedSize: SizeOrDose) {
    this.cartService.changeQty("decrement", id, clickedSize)
    this.getTotal(this.cart)
    // this.isStillValid(id)
  }

  // isStillValid(id: Id): void {
  //   const item: CartItem = this.cart.find((e: CartItem, i: number) => {
  //     if (e.item.id === id) { return e } else { return false }
  //   })!
  //   this.cartService.itemTotal(item) === 0 ?
  //     this.cartService.cart_deleteItem(id) : false
  // }

  makeOrder() {
    let cartRef!: ItemRef[];
    this.cartService.cartObservable.subscribe({
      next: (itemRef: ItemRef[]) => { cartRef = itemRef },
    })
    const order: OrderRef = {
      date: new Date,
      cartRef: cartRef,
      isAccepted: false
    }
  }
}
