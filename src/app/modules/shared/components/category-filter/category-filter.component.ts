import { Component } from '@angular/core';
import { CupCategory } from 'src/app/models/types/category';

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent {
  categories: CupCategory[] = ["all", "Black Coffee", "Latte", "Cappuccino", "Espresso", "Americano", "Macchiato"];

  getSelected(selected: CupCategory): CupCategory {
    return selected;
  }
}
