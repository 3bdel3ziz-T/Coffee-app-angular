import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './app_sections/shared/components/item-details/item-details.component';
import { HomeComponent } from './app_sections/home/components/home/home.component';
import { CartComponent } from './app_sections/cart/components/cart/cart.component';
import { FavoriteComponent } from './app_sections/favorite/component/favorite/favorite.component';
import { HistoryComponent } from './app_sections/orders-history/components/history/history.component';
import { SettingComponent } from './app_sections/shared/components/setting/setting.component';
import { NotificationComponent } from './app_sections/shared/components/notification/notification.component';
import { MakeOrderComponent } from './app_sections/cart/components/cart/make-order/make-order.component';
import { MainLayoutComponent } from './app_sections/shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
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
            path: 'make-order', component: MakeOrderComponent
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
      }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
