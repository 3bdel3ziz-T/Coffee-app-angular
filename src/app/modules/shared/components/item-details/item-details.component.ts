import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sizes } from 'src/app/models/types/size';
import { ShareService } from '../../services/share.service';
import { CoffeeBeans, CoffeeCup, CurrencySign, Payment } from 'src/app/models/types/coffee';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  selected: { size: string, price: `${number}`, currencySign: CurrencySign };
  showFullDescription: boolean = false;
  selectedCurrency: string = 'USD';
  item!: CoffeeCup | CoffeeBeans;
  constructor(
    private activatedRoute: ActivatedRoute,
    private shareService: ShareService,
    private location: Location) {
    this.selected = {
      size: '',
      price: '0',
      currencySign: CurrencySign.USD
    };
  }
  ngOnInit(): void {
    this.getItemById(this.activatedRoute.snapshot.paramMap.get('id')!)
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

  getItemById(id: string): void {
    const product: any = this.shareService.getById(id);

    typeof product === 'object' ? this.item = product :
      console.error(this.shareService.getById(id))
  }
  addToCart(size: Sizes): void { }
}
