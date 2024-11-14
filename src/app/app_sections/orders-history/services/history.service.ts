import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartService } from '../../cart/services/cart.service';
import { OrderItem, OrderRef } from 'src/app/models/types/order-history';
import { UserService } from 'src/app/user/user.service';
import { ItemRef } from 'src/app/models/types/cart-item';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  // test_data_historyItemsRef: OrderRef[] = [
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
  constructor(
    private cartService: CartService,
    private userService: UserService) {
  }

  getHistoryArr(historyRef: OrderRef[]): OrderItem[] {
    let historyItems: OrderItem[] = [];
    historyRef.forEach((e: OrderRef, i: number) => {
      historyItems.push(
        this.getHistoryItem(e)
      )
    })
    return historyItems
  }

  getHistoryItem(orderRef: OrderRef): OrderItem {
    return {
      date: orderRef.date,
      cartData: this.cartService.getCartItemsByRefArr(orderRef.cartRef),
      isAccepted: false
    }
  }

  get historyObservable(): Observable<OrderRef[]> {
    return of(this.userService.get_historyRef);
    // return of(this.userService.get_historyRef)
    // return of(this.test_data_historyItemsRef)
  }

  makeOrder(): void {
    this.userService.set_historyRef(this.createOrderRefItem(this.userService.get_cartRef));
    this.userService.clearCart();
  }
  createOrderRefItem(itemRef: ItemRef[]): OrderRef {
    const orderRef: OrderRef = {
      date: new Date,
      cartRef: itemRef,
      isAccepted: false
    }
    return orderRef;
    // this.userService.clearCart();
  }
}
