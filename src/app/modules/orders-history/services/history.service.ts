import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartService } from '../../cart/services/cart.service';
import { OrderItem, OrderRef } from 'src/app/models/types/order-history';
import { UserService } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(
    private cartService: CartService,
    private userService: UserService) {
    // this.historyItemsRef = [
    //   {
    //     date: new Date,
    //     cartRef: [
    //       {
    //         itemId: 'C1',
    //         amounts: [
    //           {
    //             size: 'S',
    //             quantity: 2
    //           }, {
    //             size: 'M',
    //             quantity: 0
    //           }, {
    //             size: 'L',
    //             quantity: 1
    //           }
    //         ]
    //       },
    //       {
    //         itemId: 'B2',
    //         amounts: [
    //           {
    //             size: '250gm',
    //             quantity: 0
    //           }, {
    //             size: '500gm',
    //             quantity: 0
    //           }, {
    //             size: '1000gm',
    //             quantity: 1
    //           }
    //         ]
    //       },
    //     ], isAccepted: false
    //   },
    //   {
    //     date: new Date,
    //     cartRef: [
    //       {
    //         itemId: 'C3',
    //         amounts: [
    //           {
    //             size: 'S',
    //             quantity: 1
    //           }, {
    //             size: 'M',
    //             quantity: 1
    //           }, {
    //             size: 'L',
    //             quantity: 0
    //           }
    //         ]
    //       },
    //       {
    //         itemId: 'B4',
    //         amounts: [
    //           {
    //             size: '250gm',
    //             quantity: 2
    //           }, {
    //             size: '500gm',
    //             quantity: 0
    //           }, {
    //             size: '1000gm',
    //             quantity: 1
    //           }
    //         ]
    //       },
    //     ], isAccepted: true
    //   }
    // ]
  }

  getHistory(historyRef: OrderRef[]): OrderItem[] {
    let historyItems: OrderItem[] = [];
    historyRef.forEach((e: OrderRef, i: number) => {
      historyItems.push({
        date: historyRef[i].date,
        cartData: this.cartService.getCartItemsByRefArr(e.cartRef),
        isAccepted: true
      })
    })
    return historyItems
  }

  get historyObservable(): Observable<OrderRef[]> {
    return of(this.userService.get_HistoryRef)
  }
}
