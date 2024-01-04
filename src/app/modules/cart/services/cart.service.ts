import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/types/cart-item';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData: CartItem[] = [];
  constructor(private appService: AppService) {
    appService.cartObservable.subscribe({
      next: (data: CartItem) => this.cartData.push(data),
      error: (err: Error) => console.error(err),
      complete: () => { }
    })
  }
  get getCartData() {
    return this.appService.passData<CartItem>(this.cartData)
  }
}
