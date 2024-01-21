import { Injectable, OnInit } from '@angular/core';
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
    private favService: FavoriteService) {
    }

  getItemDetailsById(id: Id): Item {
    return this.appService.getItemById(id)
  }

  cart_addItem(id: Id, selected: SizeOrDose): void {
    this.cartService.cart_addItem(id, selected)
  }

  favRef_addItem(favRef: Id): void {
    const favItem = this.appService.getItemById(favRef)
    this.appService.getItemById(favRef).isFavorite =
      !this.appService.getItemById(favRef).isFavorite

    this.favService.favRef_addItem(favItem)
  }
}
