import { Location, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SizeOrDose } from 'src/app/models/types/size';
import { ProductService } from '../../services/product.service';
import { CoffeeBeans, CoffeeCup, Id } from 'src/app/models/types/coffee';
import { BoxStyles } from 'src/app/models/types/box';
import { BtnShapeDirective } from '../../../../custom_directives/btn-shape.directive';
import { PriceComponent } from '../price/price.component';
import { SubTitleDirective } from '../../../../custom_directives/sub-title.directive';
import { DetailsComponent } from './details/details.component';

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
  ],
})
export class ItemDetailsComponent implements OnInit {
  @Input() MainBoxStyle: BoxStyles;
  item!: CoffeeCup | CoffeeBeans;
  selected!: SizeOrDose;
  // selectedCurrency: string = 'USD';
  constructor(
    private activatedRoute: ActivatedRoute,
    private prodService: ProductService,
    private location: Location) {
    this.MainBoxStyle = {
      width: '100%',
      height: '100%',
      radius: '0',
      background: '#0c0f14'
    }
  }

  ngOnInit(): void {
    //Because the function 'getItemDetailsById' only gets 'Id' type
    //,and 'activatedRoute.snapshot.paramMap.get' of type 'string'.
    const Id: any = this.activatedRoute.snapshot.paramMap.get('id')!
    this.getItemDetailsById(Id)

    this.selected = this.item.price.USD.sizes[0].size
  }

  getSelected(selectedSize: SizeOrDose): void {
    this.selected = selectedSize
  }

  back(): void {
    setTimeout(() => this.location.back(), 501)
  }

  getItemDetailsById(id: Id): void {
    this.item = this.prodService.getItemDetailsById(id);
  }

  cart_addItem(id: Id, selected: SizeOrDose): void {
    this.prodService.cart_addItem(id, selected)
  }
}
