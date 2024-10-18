import { Component, Input, TemplateRef } from '@angular/core';
import { BoxFlex } from 'src/app/models/types/box';
import { Item } from 'src/app/models/types/coffee';
import { TupleSize } from 'src/app/models/types/size';
import { CssUnits } from 'src/app/models/types/style-units';
import { NgStyle, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.scss',
    standalone: true,
    imports: [NgStyle, NgTemplateOutlet, RouterLink]
})
export class ProductItemComponent {
  @Input() itemData!: Item;
  @Input() imgLink?: string = undefined;
  @Input() imgBoxSize: TupleSize;
  @Input() mainBoxFlex: BoxFlex;
  @Input() sideContentBoxFlex: BoxFlex;
  @Input() titlesSize: { mainTitle: CssUnits, subTitle: CssUnits };
  constructor() {
    this.mainBoxFlex = { direction: 'column', gap: '12px' };
    this.titlesSize = { mainTitle: '13px', subTitle: '9px' };
    this.imgBoxSize = 'M'
    this.sideContentBoxFlex = {
      direction: 'column',
      gap: '0',
    }
  }
}
