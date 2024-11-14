import { Component } from '@angular/core';
import { PriceComponent } from 'src/app/app_sections/shared/components/price/price.component';
import { ProductItemComponent } from 'src/app/app_sections/shared/components/product-item/product-item.component';
import { HistoryService } from '../../services/history.service';
import { CartItem } from 'src/app/models/types/cart-item';
import { CartService } from 'src/app/app_sections/cart/services/cart.service';
import { Price, SizeOrDose } from 'src/app/models/types/size';
import { Id } from 'src/app/models/types/coffee';
import { MenuBarComponent } from 'src/app/app_sections/shared/components/menu-bar/menu-bar.component';
import { EmptyPageComponent } from 'src/app/app_sections/shared/components/empty-page/empty-page.component';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { OrderItem, OrderRef } from 'src/app/models/types/order-history';
import { TitleBarComponent } from 'src/app/app_sections/shared/components/title-bar/title-bar.component';
import { NgIf, NgStyle } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderDetailsComponent } from 'src/app/app_sections/shared/components/order-details/order-details.component';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'history-page',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  standalone: true,
  imports: [ProductItemComponent, PriceComponent, MenuBarComponent, EmptyPageComponent, BtnShapeDirective, TitleBarComponent, NgStyle, RouterOutlet, RouterLink, NgIf, NgStyle, OrderDetailsComponent]
})
export class HistoryComponent {
  historyItems: OrderItem[] = []
  constructor(
    private historyService: HistoryService,
    public appService: AppService,
    public cartService: CartService) {
    this.historyService.historyObservable.subscribe({
      next: (historyItems: OrderRef[]) => {
        this.historyItems = this.historyService.getHistoryArr(historyItems)
      }
    })
  }


}
