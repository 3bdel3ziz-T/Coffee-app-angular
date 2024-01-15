import { Injectable, OnInit } from '@angular/core';
import { CoffeeCup, CoffeeBeans, Id, Item } from '../models/types/coffee';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ItemRef } from '../models/types/cart-item';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit {
  private coffeeData: CoffeeCup[];
  private beansData: CoffeeBeans[];

  constructor(private dataService: DataService) {
    this.coffeeData = dataService.getCoffeeData
    this.beansData = dataService.getBeansData


    // 'cartRef' in localStorage ?
      // this.getCartRef() : this.setCartRef()
  }
  ngOnInit(): void {
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

  //----------------get and set cart data-----------------------
  // private getCartRef(): void {
  //   this.cartItemsRef = JSON.parse(localStorage.getItem('cartRef')!)
  // }
  // private setCartRef(): void {
  //   localStorage.setItem('cartRef', JSON.stringify(this.cartItemsRef))
  // }
}

