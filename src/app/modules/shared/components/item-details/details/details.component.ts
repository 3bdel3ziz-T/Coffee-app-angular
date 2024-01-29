import { Component, Input } from '@angular/core';
import { BoxStyles } from 'src/app/models/types/box';
import { CoffeeBeans, CoffeeCup, Id } from 'src/app/models/types/coffee';
import { SubTitleDirective } from '../../../../../custom_directives/sub-title.directive';
import { NgStyle } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'details-section',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  standalone: true,
  imports: [NgStyle, SubTitleDirective, RouterLink]
})
export class DetailsComponent {
  @Input() item!: (CoffeeCup | CoffeeBeans);
  showFullDescription: boolean = false;
  @Input() backBtn: boolean;
  @Input() MainBoxStyle: BoxStyles;
  @Input() routerLink?: string = undefined;
  constructor(private prodService: ProductService) {
    this.showFullDescription = false;
    this.backBtn = true;
    this.MainBoxStyle = {
      width: '100%',
      height: '100%',
      radius: '0',
      background: '#0c0f14'
    }
  }
  fav_addItem(id: Id): void {
    this.prodService.favRef_addItem(id)
  }
}
