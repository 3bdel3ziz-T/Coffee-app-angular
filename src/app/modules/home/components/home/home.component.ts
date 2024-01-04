import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { CoffeeCup, CoffeeBeans } from 'src/app/models/types/coffee';
import { Id } from 'src/app/models/types/cart-item';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  coffeeCupArr: CoffeeCup[] = [];
  coffeeBeansArr: CoffeeBeans[] = [];

  constructor(private homeService: HomeService) {
    this.coffeeCupArr = homeService.getCoffeeData
    this.coffeeBeansArr = homeService.getBeansData
  }
}
