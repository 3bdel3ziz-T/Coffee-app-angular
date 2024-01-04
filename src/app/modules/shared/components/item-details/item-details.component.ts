import { Location } from '@angular/common';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Amounts, SizeOrDose, Dose } from 'src/app/models/types/size';
import { ShareService } from '../../services/share.service';
import { CoffeeBeans, CoffeeCup, CurrencySign, Payment } from 'src/app/models/types/coffee';
import { ItemRef, Id, Item, Amount } from 'src/app/models/types/cart-item';

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
    private shareService: ShareService,
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
    this.getItemById(Id)
    this.selected = this.item.price.USD.sizes[0].size
  }

  getSelected(selectedSize: SizeOrDose): void {
    this.selected = selectedSize
  }

  back(): void {
    setTimeout(() => this.location.back(), 501)
  }

  getItemById(id: Id): void {
    const product: any = this.shareService.getById(id);

    typeof product === 'object' ? this.item = product :
      console.error(this.shareService.getById(id))
  }
  addItem(): void {
    const obj: ItemRef = {
      itemId: this.item.id,
      amounts: this.getAmount(this.item.id)
      // amounts: this.incrementQuantity(this.item.id)
    }
    console.log(obj)
    // if (this.item.id.startsWith('C')) {

    // }
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
// }

// let coffeeAmount: Amount =
//   [{
//     size: 'S',
//     quantity: 0,
//   }, {
//     size: 'M',
//     quantity: 0,
//   }, {
//     size: 'L',
//     quantity: 0,
//   }]
// let beansAmount: Amount =
//   [{
//     size: 'S',
//     quantity: 0,
//   }, {
//     size: 'M',
//     quantity: 0,
//   }, {
//     size: 'L',
//     quantity: 0,
//   }]
// }
// for (let i = 0; i < Amount.length; i++) {
//     Amount[i].size =
//   }
// Amount[i].quantity = 0;
// return Amount
// }
// arr.forEach((e: T, i: number) => e[i].size == this.selected ? e[i].quantity++ : false)
// }
// }
