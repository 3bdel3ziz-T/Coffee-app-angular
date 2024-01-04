import { Injectable } from '@angular/core';
import { CoffeeCup, CoffeeBeans, CurrencySign } from '../models/types/coffee';
import {Size } from '../models/types/size';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { CartItem } from '../models/types/cart-item';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private coffeeData: CoffeeCup[];
  private beansData: CoffeeBeans[];
  private cartData: CartItem[] = [];

  constructor(private dataService: DataService) {
    this.coffeeData = dataService.getCoffeeData
    this.beansData = dataService.getBeansData

    this.cartData = [
      {
        item: {
          id: 'C1',
          name: 'Americano',
          description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
          roasted: 'Medium Roasted',
          // imagelink_square: require('../assets/coffee_assets/americano/square/americano_pic_1_square.png'),
          // imagelink_portrait: require('../assets/coffee_assets/americano/portrait/americano_pic_1_portrait.png'),
          ingredients: 'Milk',
          special_ingredient: 'With Steamed Milk',
          price: {
            "USD": {
              currencySign: CurrencySign["USD"],
              sizes: [
                {
                  size: "S",
                  price: "1.38"
                },
                {
                  size: "M",
                  price: "3.15"
                },
                {
                  size: "L",
                  price: "4.29"
                }
              ]

            }
          }
          ,

          average_rating: 4.7,
          ratings_count: '6,879',
          favorite: false,
          type: 'Coffee',
          index: 0,
        },
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

  getCoffeeById(id: string): CoffeeCup | CoffeeBeans | 'ErrMsg' {
    if (id.startsWith('C')) {
      return this.loopById<CoffeeCup>(this.coffeeData, id)
    } else if (id.startsWith('B')) {
      return this.loopById<CoffeeBeans>(this.beansData, id)
    }
    else { return 'ErrMsg' }
    // console.log('this product field out!')
  }

  private loopById<T extends CoffeeCup | CoffeeBeans>(arr: T[], id: string): T {
    return arr.find((e) => e.id == id)!
  }

}
