import { Injectable } from '@angular/core';
import { CoffeeCup, CoffeeBeans } from 'src/app/models/types/coffee';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private coffeeData: CoffeeCup[] = [];
  private beansData: CoffeeBeans[] = [];

  constructor(private appService: AppService) {
    appService.coffeeObservable.subscribe({
      next: (data: CoffeeCup) => this.coffeeData.push(data),
      error: (err: Error) => console.error(err),
      complete: () => { }
    })
    appService.beansObservable.subscribe({
      next: (data: CoffeeBeans) => this.beansData.push(data),
      error: (err: Error) => console.error(err),
      complete: () => { }
    })
  }
  get getCoffeeData() {
    return this.appService.
      passData<CoffeeCup>(this.coffeeData)
  }
  get getBeansData() {
    return this.appService.
      passData<CoffeeBeans>(this.beansData)
  }
}
