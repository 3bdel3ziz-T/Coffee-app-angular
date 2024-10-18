import { Injectable } from '@angular/core';
import { CoffeeCup, CoffeeBeans, Id, Item } from '../models/types/coffee';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private coffeeData: CoffeeCup[];
  private beansData: CoffeeBeans[];

  constructor(
    private dataService: DataService,
  ) {
    this.coffeeData = dataService.getCoffeeData
    this.beansData = dataService.getBeansData
  }
  //One pattern to pass data to "component.ts"
  passData<T>(arr: T[]): T[] {
    return arr
  }

  //--------------- data observables-------------------------------
  get coffeeObservable(): Observable<CoffeeCup> {
    return new Observable<CoffeeCup>((observer: any) => {
      this.coffeeData.forEach((e: CoffeeCup) => observer.next(e))
    })
  }
  get beansObservable(): Observable<CoffeeBeans> {
    return new Observable<CoffeeBeans>((observer: any) => {
      this.beansData.forEach((e: CoffeeBeans) => observer.next(e))
    })
  }

  //----------Get the cup or beans details data using id----------
  getItemById(id: Id): Item {
    if (id.startsWith('C')) {
      return this.findById<CoffeeCup>(this.coffeeData, id)
    } else {
      return this.findById<CoffeeBeans>(this.beansData, id)
    }
  }

  private findById<T extends Item>(arr: T[], id: Id): T {
    return arr.find((e) => e.id == id)!
  }

  //----------Get the cup or beans item data using title----------
  getItemArrByTitle(searchTxt: string): any {
    // if (searchTxt.includes('beans')) {
    //   return this.findByTitle<CoffeeBeans[]>(this.beansData, searchTxt)
    // } else {
    //   return this.findByTitle<CoffeeCup[]>(this.coffeeData, searchTxt)
    // }
  }

  private findByTitle<T extends Item>(arr: T[], searchTxt: string): T {
    return arr.forEach((e) => e.name.includes(searchTxt))!
  }
}
