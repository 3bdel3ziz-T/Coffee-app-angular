import { Injectable } from '@angular/core';
import { ItemRef } from 'src/app/models/types/cart-item';
import { CoffeeBeans, CoffeeCup, Id } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class itemService {

  constructor(private appService: AppService) { }

  getItemDetailsById(id: Id): CoffeeCup | CoffeeBeans {
    return this.appService.getItemById(id)
  }

  passCartItemRef(CartItemRef: ItemRef) {
    this.appService.getCartRefItems(CartItemRef)
  }
}
