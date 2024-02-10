import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Id, Item } from 'src/app/models/types/coffee';

@Component({
  selector: 'title-bar',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss'
})
export class TitleBarComponent {
  @Input() item!: Item;
  @Input() pageTitle: string = '';
  @Input() leftBtnShape: 'settingBtn' | 'backBtn' | null = null;
  @Input() rightBtnShape: 'addFav' | 'notification' | null = null;
  constructor(private productService: ProductService) { }
  get goBack(): boolean {
    return this.productService.goBack;
  }
  fav_addItem(id: Id): void {
    this.productService.favRef_addItem(id)
  }
}
