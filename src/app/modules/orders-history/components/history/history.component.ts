import { Component, OnInit } from '@angular/core';
import { PriceComponent } from 'src/app/modules/shared/components/price/price.component';
import { ProductItemComponent } from 'src/app/modules/shared/components/product-item/product-item.component';
import { HistoryService } from '../../services/history.service';
import { CartItem } from 'src/app/models/types/cart-item';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { Price, SizeOrDose } from 'src/app/models/types/size';
import { Id } from 'src/app/models/types/coffee';
import { MenuBarComponent } from 'src/app/modules/shared/components/menu-bar/menu-bar.component';
import { MsgComponent } from 'src/app/modules/shared/components/msg/msg.component';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { OrderItem } from 'src/app/models/types/order-history';

@Component({
  selector: 'history-page',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  standalone: true,
  imports:
    [ProductItemComponent, PriceComponent, MenuBarComponent, MsgComponent, BtnShapeDirective]
})
export class HistoryComponent {
  historyItems: OrderItem[] = []
  constructor(
    private historyService: HistoryService,
    private cartService: CartService) {
    this.historyService.historyObservable.subscribe({
      next: (historyItems: OrderItem[]) => {
        this.historyItems = historyItems
      }
    })
  }

  getDate(date: Date): string {
    const day = date.getDate(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let letter: string = '';
    day === 1 ? letter = 'st' :
      day === 2 ? letter = 'nd' :
        day === 3 ? 'nd' : 'th'

    let orderDate: string = `${day}${letter} ${months[date.getMonth()]} ${hours > 12 ? hours - 12 : hours } : ${minutes < 10 ? '0' : ''}${minutes} ${hours < 12 ? 'AM' : 'PM'}`;
    return orderDate
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
  itemTotal(item: CartItem): number {
    return this.cartService.itemTotal(item)
  }
  // logMsg(...arg: any[]) {
  //   arg.forEach((e: any)=> {
  //     console.log(e)
  //   })
  // }
}
