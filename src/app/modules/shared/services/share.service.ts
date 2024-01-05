import { Injectable } from '@angular/core';
import { CartItemRef } from 'src/app/models/types/cart-item';
import { CoffeeBeans, CoffeeCup, Id } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private appService: AppService) { }

  getItemDetailsById(id: Id): CoffeeCup | CoffeeBeans | 'ErrMsg' {
    return this.appService.getItemDetailsById(id)
  }
  getCartItemRef(CartItemRef: CartItemRef) {
    this.appService.getCartItemsRef(CartItemRef)
  }
}
