import { Component } from '@angular/core';
import { NgStyle, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NgStyle, NgIf]
})
export class HeaderComponent {

  time!: string;
  signal: 25 | 50 | 75 | 100 = 100;
  batteryPercent: number = 60;
  constructor() {
    this.time = (new Date).toLocaleTimeString(undefined, { timeStyle: 'short' })
  }
}
