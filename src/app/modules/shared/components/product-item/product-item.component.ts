import { Component, Input, TemplateRef } from '@angular/core';
import { Box } from 'src/app/models/types/box';
import { CoffeeCup, CoffeeBeans } from 'src/app/models/types/coffee';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() itemData!: CoffeeCup | CoffeeBeans;
  @Input() imgBoxSize: 'S' | 'L';
  @Input() mainBox: Box;
  @Input() titlesSize: { mainTitle: number, subTitle: number };
  @Input() tagsTemplate!: TemplateRef<unknown>;
  @Input() contentTemplate!: TemplateRef<unknown>;
  constructor() {
    this.mainBox = { direction: 'column', gap: '12' };
    this.titlesSize = { mainTitle: 13, subTitle: 9 };
    this.imgBoxSize = 'L';
  }
}
