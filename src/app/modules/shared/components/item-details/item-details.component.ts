import { Location } from '@angular/common';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Amounts, SizeOrDose, Dose } from 'src/app/models/types/size';
import { itemService } from '../../services/item.service';
import { CoffeeBeans, CoffeeCup, Id } from 'src/app/models/types/coffee';
import { ItemRef, Item, Amount } from 'src/app/models/types/cart-item';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit, AfterContentChecked {
  @Input() box: { width: string, height: string, radius: string, background: string };
  selected!: SizeOrDose;
  @Input() showBuySection: boolean;
  showFullDescription: boolean = false;
  item!: CoffeeCup | CoffeeBeans;
  // selectedCurrency: string = 'USD';
  constructor(
    private activatedRoute: ActivatedRoute,
    private shareService: itemService,
    private location: Location) {
    // this.getSelected(this.item.price.USD.sizes[0].size)
    this.showBuySection = true;
    this.box = {
      width: '100%',
      height: '100%',
      radius: '0',
      background: '#0c0f14'
    }
  }
  ngAfterContentChecked(): void {
    // console.log(this.selected)
  }
  ngOnInit(): void {
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
    const product: any = this.shareService.getItemDetailsById(id);

    typeof product === 'object' ? this.item = product :
      console.error(this.shareService.getItemDetailsById(id))
  }
  addItem(): void {
    const ItemRef: ItemRef = {
      itemId: this.item.id,
      amounts: this.getAmount(this.item.id)
    }
    this.shareService.passCartItemRef(ItemRef)
  }

  getAmount(id: Id): Amount {
    let amount: Amount = [
      {
        size: 'S',
        quantity: 0,
      }, {
        size: 'M',
        quantity: 0,
      }, {
        size: 'L',
        quantity: 0,
      }
    ]
    if (id.startsWith('C')) {
      this.incrementQuantity(amount)
    } else if (id.startsWith('B')) {
      amount[0].size = '250gm'
      amount[1].size = '500gm'
      amount[2].size = '1000gm'
      this.incrementQuantity(amount)
    }
    return amount
  }
  incrementQuantity(arr: Amount): void {
    arr.forEach((e: {
      size: SizeOrDose,
      quantity: number
    }) => {
      this.selected == e.size ? e.quantity++ : false;
    })
  }
}
