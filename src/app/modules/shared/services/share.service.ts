import { Injectable } from '@angular/core';
import { Id } from 'src/app/models/types/cart-item';
import { CoffeeBeans, CoffeeCup } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private appService: AppService) { }

  getById(id: Id): CoffeeCup | CoffeeBeans | 'ErrMsg' {
    return this.appService.getCoffeeById(id)
  }
}
