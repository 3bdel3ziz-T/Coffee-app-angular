import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './modules/shared/components/item-details/item-details.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { CartComponent } from './modules/cart/components/cart/cart.component';
import { FavoriteComponent } from './modules/favorite/component/favorite/favorite.component';
import { HistoryComponent } from './modules/orders-history/components/history/history.component';
import { SettingComponent } from './modules/shared/components/setting/setting.component';
import { PaymentComponent } from './modules/cart/components/cart/payment/payment.component';
import { AddCardFormComponent } from './modules/cart/components/cart/payment/add-card-form/add-card-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'item-details/:id', component: ItemDetailsComponent },
      { path: 'setting', component: SettingComponent },
    ]
  },
  {
    path: 'cart', component: CartComponent, children: [
      { path: 'item-details/:id', component: ItemDetailsComponent },
      { path: 'setting', component: SettingComponent },
      {
        path: 'pay', component: PaymentComponent, children: [
          { path: 'add-card', component: AddCardFormComponent }
        ]
      }
    ]
  },
  {
    path: 'favorite', component: FavoriteComponent, children: [
      { path: 'setting', component: SettingComponent },
    ]
  },
  {
    path: 'history', component: HistoryComponent, children: [
      { path: 'setting', component: SettingComponent },
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
