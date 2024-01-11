import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { CoffeeCup, CoffeeBeans } from 'src/app/models/types/coffee';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BtnShapeDirective } from '../../../../custom_directives/btn-shape.directive';
import { PriceComponent } from '../../../shared/components/price/price.component';
import { ProductItemComponent } from '../../../shared/components/product-item/product-item.component';
import { CategoryFilterComponent } from '../../../shared/components/category-filter/category-filter.component';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        SearchBoxComponent,
        CategoryFilterComponent,
        ProductItemComponent,
        PriceComponent,
        BtnShapeDirective,
        RouterLink,
        RouterOutlet,
    ],
})
export class HomeComponent {

  coffeeCupArr: CoffeeCup[] = [];
  coffeeBeansArr: CoffeeBeans[] = [];

  constructor(private homeService: HomeService) {
    this.coffeeCupArr = homeService.getCoffeeData
    this.coffeeBeansArr = homeService.getBeansData
  }
}
