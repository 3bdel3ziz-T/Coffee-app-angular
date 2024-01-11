import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './modules/home/components/home/home.component';
import { CartComponent } from './modules/cart/components/cart/cart.component';
import { FavoriteComponent } from './modules/favorite/component/favorite/favorite.component';
import { HistoryComponent } from './modules/orders-history/components/history/history.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // AppComponent,
    SharedModule,
    HomeComponent,
    CartComponent,
    FavoriteComponent,
    HistoryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
