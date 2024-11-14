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
  time!: string;
  signal: 25 | 50 | 75 | 100 = 100;
  batteryPercent: number = 60;

  ngOnInit(): void {
    this.updateTime();
    const token: string = "as;0?token_a4ser45ld345erf2345678kja_sd2394u23";
  }

  updateTime(): void {
    // ? Base Case.
    this.time = (new Date).toLocaleTimeString(undefined, { timeStyle: 'short' });

    new Promise((resolve: Function) => {
      setTimeout(() => {
        this.time = (new Date).toLocaleTimeString(undefined, { timeStyle: 'short' });
        resolve()
      },
        //? makes the time changing exactly after 1 minute with UTC TIME immediately for the first time;
        //? and setinterval will handle the rest of the process automatic.
        (60000 - ((new Date).getSeconds() * 1000) + (new Date).getMilliseconds()));
    }).then(() => {
      setInterval(() => {
        this.time = (new Date).toLocaleTimeString(undefined, { timeStyle: 'short' });
      }, 60000);
    })
  }
}
