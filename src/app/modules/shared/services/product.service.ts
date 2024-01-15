import { Injectable } from '@angular/core';
import { Amount, AmountItem, ItemRef } from 'src/app/models/types/cart-item';
import { Id, Item } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';
import { CartService } from '../../cart/services/cart.service';
import { FavoriteService } from '../../favorite/services/favorite.service';
import { SizeOrDose } from 'src/app/models/types/size';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private appService: AppService,
    private cartService: CartService,
    private historyService: CartService,
    private favService: FavoriteService) { }

  getItemDetailsById(id: Id): Item {
    return this.appService.getItemById(id)
  }

  cart_addItem(id: Id, selected: SizeOrDose): void {
    const itemRef: ItemRef = {
      itemId: id,
      amounts: this.getAmount(id, selected)
    }
    this.cartService.getCartRefItems(itemRef)
  }
  getAmount(id: Id, selected: SizeOrDose): Amount {
    let amount: Amount = [
      {
        size: 'S',
        quantity: 0,
      }, {
        size: 'M',
        quantity: 0,
      }, {
        size: 'L',
        quantity: 0,
      }
    ]
    if (id.startsWith('C')) {
      this.incrementSelected(selected, amount)
    } else if (id.startsWith('B')) {
      amount[0].size = '250gm'
      amount[1].size = '500gm'
      amount[2].size = '1000gm'
      this.incrementSelected(selected, amount)
    }
    return amount
  }
  incrementSelected(selected: SizeOrDose, arr: Amount): void {
    arr.forEach((e: AmountItem) => {
      selected == e.size ? e.quantity++ : false;
    })
  }

  favRef_addItem(favRef: Id) {
    this.favService.favRef_addItem(favRef)
  }
}
