import { Component } from '@angular/core';
import { CartItem, AmountItem } from 'src/app/models/types/cart-item';
import { Price } from 'src/app/models/types/size';
import { RouterOutlet } from '@angular/router';
import { SubTitleDirective } from '../../../../custom_directives/sub-title.directive';
import { BtnShapeDirective } from '../../../../custom_directives/btn-shape.directive';
import { PriceComponent } from '../../../shared/components/price/price.component';
import { NgStyle, NgIf } from '@angular/common';
import { ProductItemComponent } from '../../../shared/components/product-item/product-item.component';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  imports: [ProductItemComponent, NgStyle, NgIf, PriceComponent, BtnShapeDirective, SubTitleDirective, RouterOutlet]
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
  isQuantity1(arr: AmountItem[]): boolean {
    let arr2: boolean[] = []
    arr.forEach((e: AmountItem) => {
      e.quantity === 1 ? arr2.push(true) : false
    })
    return arr2.length === 1 ? true : false
  }
}
