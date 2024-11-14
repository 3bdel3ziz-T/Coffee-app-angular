import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from 'src/app/models/types/coffee';
import { FavoriteService } from 'src/app/app_sections/favorite/services/favorite.service';
import { AppService } from 'src/app/services/app.service';

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

  id: string;
  constructor(public appService: AppService, public favService: FavoriteService) {
    this.id = `${Math.round(Math.random() * 1000) + 1}`;
  }
}
