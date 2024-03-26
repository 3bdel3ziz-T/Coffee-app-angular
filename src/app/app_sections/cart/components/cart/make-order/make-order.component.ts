import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PriceComponent } from 'src/app/app_sections/shared/components/price/price.component';
import { TitleBarComponent } from 'src/app/app_sections/shared/components/title-bar/title-bar.component';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { SubTitleDirective } from 'src/app/custom_directives/sub-title.directive';
import { CartService } from '../../../services/cart.service';
import { ProductItemComponent } from 'src/app/app_sections/shared/components/product-item/product-item.component';
import { OrderRef } from 'src/app/models/types/order-history';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'make-order',
  standalone: true,
  imports: [TitleBarComponent, BtnShapeDirective, RouterLink, RouterOutlet, PriceComponent, SubTitleDirective, ProductItemComponent],
  templateUrl: './make-order.component.html',
  styleUrl: './make-order.component.scss'
})
export class MakeOrderComponent {
  @Input() obj!: OrderRef;
  constructor(private userService: UserService) {
    // this.obj = this.userService.get_historyRef[this.userService.get_historyRef.length - 1]
  }
}
