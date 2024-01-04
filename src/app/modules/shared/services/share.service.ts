import { Injectable } from '@angular/core';
import { CoffeeBeans, CoffeeCup } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private appService: AppService) { }

  getById(id: string): CoffeeCup | CoffeeBeans | 'ErrMsg' {
    return this.appService.getCoffeeById(id)
  }
}
