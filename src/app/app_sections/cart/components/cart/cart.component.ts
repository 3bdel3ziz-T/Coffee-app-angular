import { Component } from '@angular/core';
import { CartItem, AmountItem, ItemRef } from 'src/app/models/types/cart-item';
import { SizeOrDose } from 'src/app/models/types/size';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SubTitleDirective } from '../../../../custom_directives/sub-title.directive';
import { BtnShapeDirective } from '../../../../custom_directives/btn-shape.directive';
import { PriceComponent } from '../../../shared/components/price/price.component';
import { NgStyle, NgIf } from '@angular/common';
import { ProductItemComponent } from '../../../shared/components/product-item/product-item.component';
import { Id } from 'src/app/models/types/coffee';
import { MenuBarComponent } from 'src/app/app_sections/shared/components/menu-bar/menu-bar.component';
import { EmptyPageComponent } from 'src/app/app_sections/shared/components/empty-page/empty-page.component';
import { TitleBarComponent } from 'src/app/app_sections/shared/components/title-bar/title-bar.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  imports: [ProductItemComponent, NgStyle, NgIf, PriceComponent, BtnShapeDirective, SubTitleDirective, RouterOutlet, EmptyPageComponent, RouterLink, RouterOutlet, TitleBarComponent]
})
export class CartComponent {
  cart!: CartItem[];
  constructor(public cartService: CartService) {
    this.cartService.cartObservable.subscribe({
      next: (itemRef: ItemRef[]) => this.cart = this.cartService.getCartItemsByRefArr(itemRef),
      error: (err: Error) => console.error(err),
      complete: () => { }
    })
  }

  isQty1(arr: AmountItem[]): boolean {
    return this.cartService.qtyCount(arr) === 1 ? true : false
  }
}
