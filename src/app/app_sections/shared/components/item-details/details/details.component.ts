import { Component, Input } from '@angular/core';
import { BoxStyles } from 'src/app/models/types/box';
import { CoffeeBeans, CoffeeCup, Id } from 'src/app/models/types/coffee';
import { SubTitleDirective } from '../../../../../custom_directives/sub-title.directive';
import { NgStyle } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';
import { TitleBarComponent } from '../../title-bar/title-bar.component';

@Component({
  selector: 'details-section',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  standalone: true,
  imports: [NgStyle, SubTitleDirective, TitleBarComponent, RouterLink]
})
export class DetailsComponent {
  @Input() item!: (CoffeeCup | CoffeeBeans);
  isDescriptionExpanded: boolean = false;
  @Input() buttons: { leftBtn: boolean, rightBtn: boolean };
  @Input() MainBoxStyle: BoxStyles;
  @Input() routerLink?: string = undefined;
  constructor() {
    this.isDescriptionExpanded = false;
    this.buttons = { leftBtn: false, rightBtn: false };
    this.MainBoxStyle = {
      width: '100%',
      height: '100%',
      radius: '0',
      background: '#0c0f14'
    }
  }
}