import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sizes } from 'src/app/models/types/size';
import { ShareService } from '../../services/share.service';
import { CoffeeBeans, CoffeeCup, CurrencySign, Payment } from 'src/app/models/types/coffee';
import { Id } from 'src/app/models/types/cart-item';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  @Input() box: { width: string, height: string,radius: string, background: string };
  selected: { size: string, price: `${number}`, currencySign: CurrencySign };
  @Input() showBuySection: boolean;
  showFullDescription: boolean = false;
  selectedCurrency: string = 'USD';
  item!: CoffeeCup | CoffeeBeans;
  constructor(
    private activatedRoute: ActivatedRoute,
    private shareService: ShareService,
    private location: Location) {
    this.showBuySection = true;
    this.box = {
      width: '100%',
      height: '100%',
      radius: '0',
      background: '#0c0f14'
    }
    this.selected = {
      size: '',
      price: '0',
      currencySign: CurrencySign.USD
    };
  }
  ngOnInit(): void {
    const Id: any = this.activatedRoute.snapshot.paramMap.get('id')!
    this.getItemById(Id)
    this.getSelected('S', this.item.price.USD.sizes[0].price)
  }

  getSelected(selectedSize: string, price: `${number}`): void {
    //[1] set selected size 
    this.selected.size = selectedSize;
    //[2] set selected index
    this.selected.price = price
  }

  back(): void {
    setTimeout(() => this.location.back(), 501)
  }

  getItemById(id: Id): void {
    const product: any = this.shareService.getById(id);

    typeof product === 'object' ? this.item = product :
      console.error(this.shareService.getById(id))
  }
  // addToCart(size: Sizes): void { }
  addItem(id: Id): void {

  }
}
