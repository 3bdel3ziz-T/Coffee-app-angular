import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PriceComponent } from 'src/app/app_sections/shared/components/price/price.component';
import { TitleBarComponent } from 'src/app/app_sections/shared/components/title-bar/title-bar.component';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { SubTitleDirective } from 'src/app/custom_directives/sub-title.directive';
import { CartService } from '../../../services/cart.service';
import { ProductItemComponent } from 'src/app/app_sections/shared/components/product-item/product-item.component';
import { OrderItem, OrderRef } from 'src/app/models/types/order-history';
import { UserService } from 'src/app/user/user.service';
import { MainLayoutComponent } from 'src/app/app_sections/shared/components/main-layout/main-layout.component';
import { CartItem } from 'src/app/models/types/cart-item';
import { OrderDetailsComponent } from 'src/app/app_sections/shared/components/order-details/order-details.component';
import { AppService } from 'src/app/services/app.service';
import { HistoryService } from 'src/app/app_sections/orders-history/services/history.service';
import { EspressoLoaderComponent } from 'src/app/app_sections/shared/components/espresso-loader/espresso-loader.component';

@Component({
  selector: 'make-order',
  standalone: true,
  imports: [TitleBarComponent, BtnShapeDirective, RouterLink, RouterOutlet, PriceComponent, SubTitleDirective, ProductItemComponent, MainLayoutComponent, OrderDetailsComponent, EspressoLoaderComponent],
  templateUrl: './make-order.component.html',
  styleUrl: './make-order.component.scss'
})
export class MakeOrderComponent implements OnInit {
  isLoading: boolean = false;
  orderData!: OrderItem;
  constructor(private userService: UserService, public cartService: CartService, public historyService: HistoryService) {
    this.orderData = historyService.getHistoryItem(this.historyService.createOrderRefItem(this.userService.get_cartRef))
  }

  ngOnInit(): void {
    // this.orderData = this.historyService.getHistoryArr(this.userService.get_cartRef);
    // this.orderData = this.historyService.getHistoryItem(this.historyService.getHistoryItem(this.userService.get_cartRef));
  }
}
