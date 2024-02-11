import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PriceComponent } from 'src/app/app_sections/shared/components/price/price.component';
import { TitleBarComponent } from 'src/app/app_sections/shared/components/title-bar/title-bar.component';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { SubTitleDirective } from 'src/app/custom_directives/sub-title.directive';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'make-order',
  standalone: true,
  imports: [TitleBarComponent, BtnShapeDirective, RouterLink, RouterOutlet, PriceComponent, SubTitleDirective],
  templateUrl: './make-order.component.html',
  styleUrl: './make-order.component.scss'
})
export class MakeOrderComponent {
  constructor(private cartService: CartService) {

  }
}
