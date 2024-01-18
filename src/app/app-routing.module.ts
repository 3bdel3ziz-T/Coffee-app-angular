import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './modules/shared/components/item-details/item-details.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { CartComponent } from './modules/cart/components/cart/cart.component';
import { FavoriteComponent } from './modules/favorite/component/favorite/favorite.component';
import { HistoryComponent } from './modules/orders-history/components/history/history.component';
import { SettingComponent } from './modules/shared/components/setting/setting.component';

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
    ]
  },
  {path: 'favorite', component: FavoriteComponent},
  {path: 'history', component: HistoryComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
