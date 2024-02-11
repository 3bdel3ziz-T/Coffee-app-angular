import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './app_sections/shared/components/item-details/item-details.component';
import { HomeComponent } from './app_sections/home/components/home/home.component';
import { CartComponent } from './app_sections/cart/components/cart/cart.component';
import { FavoriteComponent } from './app_sections/favorite/component/favorite/favorite.component';
import { HistoryComponent } from './app_sections/orders-history/components/history/history.component';
import { SettingComponent } from './app_sections/shared/components/setting/setting.component';
import { PaymentComponent } from './app_sections/cart/components/cart/payment/payment.component';
import { AddCardFormComponent } from './app_sections/cart/components/cart/payment/add-card-form/add-card-form.component';
import { NotificationComponent } from './app_sections/shared/components/notification/notification.component';
import { MakeOrderComponent } from './app_sections/cart/components/cart/make-order/make-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'item-details/:id', component: ItemDetailsComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'notifications', component: NotificationComponent },
    ]
  },
  {
    path: 'cart', component: CartComponent, children: [
      { path: 'item-details/:id', component: ItemDetailsComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'notifications', component: NotificationComponent },
      {
        path: 'make-order', component: MakeOrderComponent, children: [
          {
            path: 'choose-payment', component: PaymentComponent, children: [
              { path: 'add-card', component: AddCardFormComponent },
            ]
          }
        ]
      },

    ]
  },
  {
    path: 'favorite', component: FavoriteComponent, children: [
      { path: 'setting', component: SettingComponent },
      { path: 'item-details/:id', component: ItemDetailsComponent },
      { path: 'notifications', component: NotificationComponent },
      // { path: 'sign-in', component: UserLoginComponent },
    ]
  },
  {
    path: 'history', component: HistoryComponent, children: [
      { path: 'setting', component: SettingComponent },
      { path: 'notifications', component: NotificationComponent },
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
