import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/types/cart-item';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartArr: CartItem[] = []
  constructor(private appService: AppService) {
    appService.cartObservable.subscribe({
      next: (data: CartItem) => this.cartArr.push(data),
      error: (err: Error) => console.error(err),
      complete: () => { }
    })
  }
  get getCartArr() {
    return this.appService.passData<CartItem>(this.cartArr)
  }
}
