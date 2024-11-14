import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { PriceComponent } from '../price/price.component';
import { CartService } from 'src/app/app_sections/cart/services/cart.service';
import { NgStyle } from '@angular/common';
import { OrderItem } from 'src/app/models/types/order-history';

@Component({
  selector: 'order-details',
  standalone: true,
  imports: [ProductItemComponent, PriceComponent, NgStyle],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
@Input() orderData!: OrderItem;
  constructor(public appService: AppService, public cartService: CartService) {}

}
