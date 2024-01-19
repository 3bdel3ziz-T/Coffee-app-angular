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
    const dateNow: Date = new Date,
      day = dateNow.getDate(),
      hours = dateNow.getHours(),
      minutes = dateNow.getMinutes();
    this.time = `${hours > 12 ? hours - 12 : hours } : ${minutes < 10 ? '0' : ''}${minutes} ${hours < 12 ? 'AM' : 'PM'}`

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

