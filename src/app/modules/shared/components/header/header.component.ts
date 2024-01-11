import { Component, OnInit } from '@angular/core';
import { NgStyle, NgIf } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [NgStyle, NgIf]
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    const dateNow: Date = new Date;
    this.time = `${dateNow.getHours() > 12 ? dateNow.getHours() - 12 : dateNow.getHours()} : ${dateNow.getMinutes() > 9 ? dateNow.getMinutes() : '0' + dateNow.getMinutes()}  ${dateNow.getHours() >= 12 ? 'pm' : 'am'}`

    this.changeBackground();
  }

  time!: string;
  signal: 25 | 50 | 75 | 100 = 100;
  batteryPercent: number = 60;
  changeBG: boolean = false;

  changeBackground(): void {
    document.addEventListener('scroll', () => {
      window.scrollY > 1 ? this.changeBG = true : this.changeBG = false;
    });
  }
}

