import { Injectable } from '@angular/core';
import { CartItem, ItemRef } from 'src/app/models/types/cart-item';
import { Id } from 'src/app/models/types/coffee';
import { Price, SizeOrDose } from 'src/app/models/types/size';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData!: CartItem[];
  constructor(private appService: AppService) {
    appService.cartRefObservable.subscribe({
      next: (data: ItemRef[]) => this.cartData = this.getCartItemsByRef(data),
      error: (err: Error) => console.error(err),
      complete: () => { }
    })
  }

  getCartItemsByRef(arr: ItemRef[]): CartItem[] {
    return arr.map
      ((e: ItemRef, i: number, arr: ItemRef[]): any => {
        return {
          item: this.appService.getItemById(e.itemId),
          amounts: e.amounts
        }
      })
  }

  // get cartObservable(): Observable<CartItem> {
  //   return new Observable<CartItem>((observer: any) => {
  //     this.cartData.forEach((e: CartItem) => observer.next(e))
  //   })
  // }

  get getTotal(): Price {
    let totalPrice: number = 0;
    this.cartData.forEach((item: CartItem, i: number, arr: CartItem[]) => {
      item.amounts.forEach((e) => {
        let itemPrice: number = 0;
        if (e.quantity > 0) {
          itemPrice += e.quantity * +this.getPriceBySize(arr[i].item.id, e.size)
        }
        totalPrice += itemPrice
      })
    })
    return `${totalPrice}`
  }
  private getPriceBySize(id: Id, size: SizeOrDose): Price {
    let price!: Price;
    this.cartData.forEach((e: CartItem, i: number) => {
      e.item.id === id ?
        e.item.price.USD.sizes.forEach((e) =>
          e.size === size ? price = e.price : false) : false
    })
    return price
  }
  get getCartData() {
    return this.appService.passData<CartItem>(this.cartData)
  }
}
