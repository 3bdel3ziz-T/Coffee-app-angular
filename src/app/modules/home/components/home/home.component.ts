import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { CoffeeCup, CoffeeBeans } from 'src/app/models/types/coffee';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BtnShapeDirective } from '../../../../custom_directives/btn-shape.directive';
import { PriceComponent } from '../../../shared/components/price/price.component';
import { ProductItemComponent } from '../../../shared/components/product-item/product-item.component';
import { CategoryFilterComponent } from '../../../shared/components/category-filter/category-filter.component';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { MenuBarComponent } from 'src/app/modules/shared/components/menu-bar/menu-bar.component';
import { TitleSectionComponent } from 'src/app/modules/shared/components/title-section/title-section.component';
import { CoffeeCategory } from 'src/app/models/types/category';

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
    MenuBarComponent,
    TitleSectionComponent
  ],
})
export class HomeComponent {

  coffeeData: CoffeeCup[] = [];
  beansData: CoffeeBeans[] = [];
  selected: CoffeeCategory = 'all';

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
  selectedCategory(selected: CoffeeCategory): void {
    this.selected = selected
  }
  getSearchTxt(searchTxt: string): string {
    return searchTxt;
  }
}
