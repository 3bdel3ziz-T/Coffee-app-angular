import { DoCheck, Injectable } from '@angular/core';
import { CartItem, ItemRef } from 'src/app/models/types/cart-item';
import { Id } from 'src/app/models/types/coffee';
import { Price, SizeOrDose, Sizes } from 'src/app/models/types/size';
import { AppService } from '../../../services/app.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsRef: ItemRef[] = [];
  constructor(private appService: AppService) {
    // appService.getCartRefItems()
  }
  getCartRefItems(itemRef: ItemRef): void {
    this.cartItemsRef.push(itemRef)
  }

  getCartItemsByRef(arr: ItemRef[]): CartItem[] {
    return arr.map((e: ItemRef, i: number, arr: ItemRef[]): any => {
      return {
        item: this.appService.getItemById(e.itemId),
        amounts: e.amounts
      }
    })
  }

  getTotal(cartItems: CartItem[]): Price {
    let totalPrice: number = 0;
    cartItems.forEach((item: CartItem, i: number, arr: CartItem[]) => {
      totalPrice += this.itemTotal(item)
    })
    return this.ToPrice(totalPrice)
  }
  
  itemTotal(item: CartItem): number {
    let itemTotal: number = 0;
    item.amounts.forEach((e) => {
      let itemPrice: number = 0;
      if (e.quantity > 0) {
        itemPrice += e.quantity * +this.getPriceBySize(item.item.id, e.size)
      }
      itemTotal += itemPrice
    })
    return itemTotal
  }
  getPriceBySize(id: Id, size: SizeOrDose): Price {
    let price!: Price;
    this.appService.getItemById(id).price.USD.sizes
      .forEach((e: {
        size: SizeOrDose;
        price: Price;
      }, i: number) => {
        e.size === size ? price = e.price : false
      })
    return price
  }

  ToPrice(price: number): Price {
    return `${price}`
  }

  get cartObservable(): Observable<CartItem[]> {
    return of(this.getCartItemsByRef(this.cartItemsRef))
  }
}
