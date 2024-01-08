import { DoCheck, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, ItemRef } from 'src/app/models/types/cart-item';
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
    console.log(this.cartData)
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

  get getCartData() {
    return this.appService.passData(this.cartData)
  }
  // get cartObservable(): Observable<CartItem> {
  //   return new Observable<CartItem>((observer: any) => {
  //     this.cartData.forEach((e: CartItem) => observer.next(e))
  //   })
  // }
}
