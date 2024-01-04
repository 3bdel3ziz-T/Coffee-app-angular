import { Injectable } from '@angular/core';
import { CoffeeCup, CoffeeBeans } from '../models/types/coffee';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { CartItem, CartIds, Id } from '../models/types/cart-item';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private coffeeData: CoffeeCup[];
  private beansData: CoffeeBeans[];
  private cartIds: CartIds[] = [];
  private cartData: CartItem[] = [];
  // private favoriteData: Favorite[] = [];

  constructor(private dataService: DataService) {
    this.coffeeData = dataService.getCoffeeData
    this.beansData = dataService.getBeansData
    this.cartIds = [
      {
        itemId: 'C1',
        amounts: [
          {
            size: "S",
            quantity: 1
          },
          {
            size: "M",
            quantity: 2
          },
          {
            size: "L",
            quantity: 0
          }
        ],
      },
      {
        itemId: 'B2',
        amounts: [
          {
            size: "S",
            quantity: 1
          },
          {
            size: "M",
            quantity: 2
          },
          {
            size: "L",
            quantity: 0
          }
        ],
      },
      {
        itemId: 'C5',
        amounts: [
          {
            size: "S",
            quantity: 1
          },
          {
            size: "M",
            quantity: 2
          },
          {
            size: "L",
            quantity: 0
          }
        ],
      },
      {
        itemId: 'C5',
        amounts: [
          {
            size: "S",
            quantity: 1
          },
          {
            size: "M",
            quantity: 2
          },
          {
            size: "L",
            quantity: 0
          }
        ],
      }
    ]
    this.getCartById()
  }

  passData<T>(arr: T[]): T[] {
    return arr
  }

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
  get cartObservable(): Observable<CartItem> {
    return new Observable<CartItem>((observer: any) => {
      this.cartData.forEach((e: CartItem) => observer.next(e))
    })
  }

  getCoffeeById(id: Id): CoffeeCup | CoffeeBeans | 'ErrMsg' {
    if (id.startsWith('C')) {
      return this.findById<CoffeeCup>(this.coffeeData, id)
    } else if (id.startsWith('B')) {
      return this.findById<CoffeeBeans>(this.beansData, id)
    }
    else { return 'ErrMsg' }
    // console.log('this product field out!')
  }


  getCartById(): void {
    this.cartIds.forEach
      ((id: CartIds, i: number, arr: CartIds[]) => {
        if (this.cartIds[i].itemId.startsWith('C')) {
          this.cartData.push({
            item: this.findById<CoffeeCup>(this.coffeeData, this.cartIds[i].itemId),
            amounts: this.cartIds[i].amounts,
          })
        } else if (this.cartIds[i].itemId.startsWith('B')) {
          this.cartData.push({
            item: this.findById<CoffeeBeans>(this.beansData, this.cartIds[i].itemId),
            amounts: this.cartIds[i].amounts,
          })
        }
      })
    //   return this.findById<CoffeeCup>(this.coffeeData, id)
    // }
    // else { return 'ErrMsg' }
    // console.log('this product field out!')
  }


  private findById<T extends CoffeeCup | CoffeeBeans>(arr: T[], id: Id): T {
    return arr.find((e) => e.id == id)!
  }
  // private forEachById<T extends CoffeeCup | CoffeeBeans>(arr: T[], id: Id): T[] {
  //   return arr.forEach((e) => e.id == id)!
  // }

}
