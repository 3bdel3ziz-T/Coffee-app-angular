import { NgStyle } from '@angular/common';
import { AfterContentInit, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SizeOrDose } from 'src/app/models/types/size';
import { CoffeeBeans, CoffeeCup, Id, Item } from 'src/app/models/types/coffee';
import { BoxStyles } from 'src/app/models/types/box';
import { BtnShapeDirective } from '../../../../custom_directives/btn-shape.directive';
import { PriceComponent } from '../price/price.component';
import { SubTitleDirective } from '../../../../custom_directives/sub-title.directive';
import { DetailsComponent } from './details/details.component';
import { AlertMsgComponent } from '../alert-msg/alert-msg.component';
import { CartService } from 'src/app/app_sections/cart/services/cart.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
  standalone: true,
  imports: [
    NgStyle,
    DetailsComponent,
    SubTitleDirective,
    PriceComponent,
    BtnShapeDirective,
    AlertMsgComponent
  ],
})
export class ItemDetailsComponent implements AfterContentInit {
  item!: CoffeeCup | CoffeeBeans;
  id: Id = this.activatedRoute.snapshot.paramMap.get('id') as Id;
  selected: number = 0;
  // selectedCurrency: string = 'USD';
  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService,
    public appService: AppService) {
    }
    ngAfterContentInit(): void {
      this.item = this.appService.getItemById(this.id);
  }
}
