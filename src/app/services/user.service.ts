import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/types/user';
import { ItemRef } from '../models/types/cart-item';
import { CartService } from '../modules/cart/services/cart.service';
import { FavoriteService } from '../modules/favorite/services/favorite.service';
import { Id } from '../models/types/coffee';
import { HistoryService } from '../modules/orders-history/services/history.service';
import { OrderRef } from '../models/types/order-history';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  user!: User
  constructor(
    private cartService: CartService,
    private favService: FavoriteService,
    private historyService: HistoryService,
  ) {
    this.user = {
      userId: this.user.email,
      userName: 'userName',
      age: undefined,
      email: '@',
      addresses: [],
      payments: [],
      cartData: [],
      favData: [],
      historyData: [],
      appMode: 'dark',
    }
  }
  ngOnInit(): void {
    this.cartService.cartObservable.subscribe({
      next: (data: ItemRef[]) => this.user.cartData = data
    })

    this.favService.favObservable.subscribe({
      next: (data: Id[]) => this.user.favData = data
    })

    this.historyService.historyObservable.subscribe({
      next: (data: OrderRef[]) => this.user.historyData.push(data)
    })
  }
}
