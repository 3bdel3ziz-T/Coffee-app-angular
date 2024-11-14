import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
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
export class ProductItemComponent implements AfterContentInit {
  @Input() itemData!: Item;
  @Input() imgLink?: string = undefined;
  @Input() imgBoxSize: TupleSize;
  @Input() mainBoxFlex: BoxFlex;
  @Input() sideContentBoxFlex: BoxFlex;
  @Input() titlesSize: { mainTitle: CssUnits, subTitle: CssUnits };
  @ViewChild('ImgElRef') ImgElRef!: ElementRef<HTMLImageElement>
  constructor() {
    this.mainBoxFlex = { direction: 'column', gap: '12px' };
    this.titlesSize = { mainTitle: '13px', subTitle: '9px' };
    this.imgBoxSize = 'M'
    this.sideContentBoxFlex = {
      direction: 'column',
      gap: '0',
    }
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  ngAfterViewInit(): void {
    this.ImgElRef.nativeElement.src = this.itemData.imageLink_square
  }
}
