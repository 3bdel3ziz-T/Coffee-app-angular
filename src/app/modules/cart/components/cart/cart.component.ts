import { Component } from '@angular/core';
import { CartItem, AmountItem } from 'src/app/models/types/cart-item';
import { Price, SizeOrDose } from 'src/app/models/types/size';
import { RouterOutlet } from '@angular/router';
import { SubTitleDirective } from '../../../../custom_directives/sub-title.directive';
import { BtnShapeDirective } from '../../../../custom_directives/btn-shape.directive';
import { PriceComponent } from '../../../shared/components/price/price.component';
import { NgStyle, NgIf } from '@angular/common';
import { ProductItemComponent } from '../../../shared/components/product-item/product-item.component';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { Id } from 'src/app/models/types/coffee';
import { MenuBarComponent } from 'src/app/modules/shared/components/menu-bar/menu-bar.component';
import { MsgComponent } from 'src/app/modules/shared/components/msg/msg.component';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  imports: [ProductItemComponent, NgStyle, NgIf, PriceComponent, BtnShapeDirective, SubTitleDirective, RouterOutlet, MenuBarComponent,MsgComponent]
})
export class CartComponent {
  cart!: CartItem[];
  totalPrice!: Price
  constructor(private cartService: CartService) {
    this.cartService.cartObservable.subscribe({
      next: (data: CartItem[]) => this.cart = data,
      error: (err: Error) => console.error(err),
      complete: () => { }
    })
    this.totalPrice = this.cartService.getTotal(this.cart)
  }
  isQty1(arr: AmountItem[]): boolean {
    let booleans: boolean[] = [];
    arr.forEach((item: AmountItem) => item.quantity > 0 ? booleans.push(true) : false)
    return booleans.length === 1 ? true : false
  }

  incrementQty(id: Id, size: SizeOrDose) {
    this.cartService.changeQty("increment", this.cartService.createCartRefItem(id, size))
  }
  decrementQty(id: Id, size: SizeOrDose) {
    this.cartService.changeQty("decrement", this.cartService.createCartRefItem(id, size))
  }
}
