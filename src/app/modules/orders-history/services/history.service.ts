import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { CartItem, ItemRef } from 'src/app/models/types/cart-item';
import { CartService } from '../../cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private historyItemsRef: ItemRef[][] = []
  constructor(private cartService: CartService) {
    this.historyItemsRef = [
      [
        {
          itemId: 'C1',
          amounts: [
            {
              size: 'S',
              quantity: 2
            }, {
              size: 'M',
              quantity: 0
            }, {
              size: 'L',
              quantity: 1
            }
          ]
        },
        {
          itemId: 'B2',
          amounts: [
            {
              size: '250gm',
              quantity: 0
            }, {
              size: '500gm',
              quantity: 0
            }, {
              size: '1000gm',
              quantity: 1
            }
          ]
        },
      ],
      [
        {
          itemId: 'C3',
          amounts: [
            {
              size: 'S',
              quantity: 1
            }, {
              size: 'M',
              quantity: 1
            }, {
              size: 'L',
              quantity: 0
            }
          ]
        },
        {
          itemId: 'B4',
          amounts: [
            {
              size: '250gm',
              quantity: 2
            }, {
              size: '500gm',
              quantity: 0
            }, {
              size: '1000gm',
              quantity: 1
            }
          ]
        },
      ],
    ]
  }

  private getHistory(historyRef: ItemRef[][]): CartItem[][] {
    let historyItems: CartItem[][] = [];
    historyRef.forEach((e: ItemRef[]) => {
      historyItems.push(this.cartService.getCartItemsByRef(e))
    })
    return historyItems
  }
  
  get historyObservable(): Observable<CartItem[][]> {
    return of(this.getHistory(this.historyItemsRef)) 
  }
}
