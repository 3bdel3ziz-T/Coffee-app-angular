import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SizeOrDose } from 'src/app/models/types/size';
import { itemService } from '../../services/item.service';
import { CoffeeBeans, CoffeeCup, Id } from 'src/app/models/types/coffee';
import { ItemRef, Item, Amount } from 'src/app/models/types/cart-item';
import { BoxStyles } from 'src/app/models/types/box';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  @Input() MainBoxStyle: BoxStyles;
  selected!: SizeOrDose;
  item!: CoffeeCup | CoffeeBeans;
  // selectedCurrency: string = 'USD';
  constructor(
    private activatedRoute: ActivatedRoute,
    private shareService: itemService,
    private location: Location) {
    // this.getSelected(this.item.price.USD.sizes[0].size)
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
    const product: typeof this.item = this.shareService.getItemDetailsById(id);
    typeof product === 'object' ? this.item = product :
      console.error(this.shareService.getItemDetailsById(id))
  }
  Cart_addItem(): void {
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
      this.incrementSelected(amount)
    } else if (id.startsWith('B')) {
      amount[0].size = '250gm'
      amount[1].size = '500gm'
      amount[2].size = '1000gm'
      this.incrementSelected(amount)
    }
    return amount
  }
  incrementSelected(arr: Amount): void {
    arr.forEach((e: Item) => {
      this.selected == e.size ? e.quantity++ : false;
    })
  }
}
