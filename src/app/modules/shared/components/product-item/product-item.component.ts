import { Component, Input, TemplateRef } from '@angular/core';
import { BoxFlex } from 'src/app/models/types/box';
import { Item } from 'src/app/models/types/coffee';
import { TupleSize } from 'src/app/models/types/size';
import { CssUnits } from 'src/app/models/types/style-units';
import { NgStyle, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.scss',
    standalone: true,
    imports: [NgStyle, NgTemplateOutlet]
})
export class ProductItemComponent {
  @Input() itemData!: Item;
  @Input() imgBoxSize: TupleSize;
  @Input() mainBox: BoxFlex;
  @Input() titlesSize: { mainTitle: CssUnits, subTitle: CssUnits };
  @Input() tagsTemplate!: TemplateRef<unknown>;
  @Input() contentTemplate!: TemplateRef<unknown>;
  constructor() {
    this.mainBox = { direction: 'column', gap: '12px' };
    this.titlesSize = { mainTitle: '13px', subTitle: '9px' };
    this.imgBoxSize = 'M'
    // this.imgBoxSize = 'L';
  }
}
