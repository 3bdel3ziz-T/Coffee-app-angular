import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoffeeCategory } from 'src/app/models/types/category';

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
  standalone: true
})
export class CategoryFilterComponent implements OnInit {
  @Output() emitSelected: EventEmitter<CoffeeCategory> = new EventEmitter<CoffeeCategory>

  ngOnInit(): void {
    this.getSelected('all');
  }
  categories: CoffeeCategory[] = ["all", "Black Coffee", "Latte", "Cappuccino", "Espresso", "Americano", "Macchiato"];
  getSelected(selected: CoffeeCategory) {
    this.emitSelected.emit(selected);
  }
}
