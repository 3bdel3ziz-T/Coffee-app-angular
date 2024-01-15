import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PriceComponent } from 'src/app/modules/shared/components/price/price.component';
import { ProductItemComponent } from 'src/app/modules/shared/components/product-item/product-item.component';
import { HistoryService } from '../../services/history.service';
import { CartItem, ItemRef } from 'src/app/models/types/cart-item';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { Price, SizeOrDose } from 'src/app/models/types/size';
import { Id } from 'src/app/models/types/coffee';

@Component({
  selector: 'history-page',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  standalone: true,
  imports:
    [ProductItemComponent, PriceComponent]
})
export class HistoryComponent {
  historyItems: CartItem[][] = []
  constructor(
    private historyService: HistoryService,
    private cartService: CartService) {
    this.historyService.historyObservable.subscribe({
      next: (historyItems: CartItem[][]) => {
        this.historyItems = historyItems
      }
    })
  }

  ToPrice(price: number): Price {
    return this.cartService.ToPrice(price);
  }

  getPriceBySize(id: Id, size: SizeOrDose): Price {
    return this.cartService.getPriceBySize(id, size)
  }

  orderTotal(cartItems: CartItem[]): Price {
    return this.cartService.getTotal(cartItems)
  }
  itemTotal(item: CartItem) {
    return this.cartService.itemTotal(item)
  }
  // logMsg(...arg: any[]) {
  //   arg.forEach((e: any)=> {
  //     console.log(e)
  //   })
  // }
}
