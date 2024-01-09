import { Component, Input, TemplateRef } from '@angular/core';
import { BoxFlex } from 'src/app/models/types/box';
import { CoffeeCup, CoffeeBeans } from 'src/app/models/types/coffee';
import { CssUnits } from 'src/app/models/types/style-units';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() itemData!: CoffeeCup | CoffeeBeans;
  @Input() imgBoxSize: 'S' | 'L';
  @Input() mainBox: BoxFlex;
  @Input() titlesSize: { mainTitle: CssUnits, subTitle: CssUnits };
  @Input() tagsTemplate!: TemplateRef<unknown>;
  @Input() contentTemplate!: TemplateRef<unknown>;
  constructor() {
    this.mainBox = { direction: 'column', gap: '12px' };
    this.titlesSize = { mainTitle: '13px', subTitle: '9px' };
    this.imgBoxSize = 'L';
  }
}
