import { Component } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { Notification } from 'src/app/models/notification';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [TitleBarComponent, NgFor],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  notifications: Notification[] = []
  constructor() {
    this.notifications = [
      {
        date: new Date,
        title: 'congratulations🥳🎉',
        description: 'your account has been approved welcome in our coffee app😊'
      },
      {
        date: new Date,
        title: 'first order🎉',
        description: 'your first order is on road to your house, i hope you be happy with us😊'
      },
      {
        date: new Date,
        title: 'special offer',
        description: 'use this discount ticket "32fc3" to take discount 5% on your order'
      },
      {
        date: new Date,
        title: 'happy birthday🥳🎉',
        description: 'happy birthday and this is our gift to you 5% off to the final of your the day'
      },
    ]
  }
}
