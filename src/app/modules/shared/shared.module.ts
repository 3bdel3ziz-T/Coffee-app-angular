import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { PriceComponent } from './components/price/price.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { FormsModule } from '@angular/forms';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { DetailsComponent } from './components/item-details/details/details.component';
import { SubTitleDirective } from 'src/app/custom_directives/sub-title.directive';

@NgModule({
  declarations: [
    SplashScreenComponent,
    MenuBarComponent,
    HeaderComponent,
    ItemDetailsComponent,
    ProductItemComponent,
    PriceComponent,
    SearchBoxComponent,
    CategoryFilterComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BtnShapeDirective,
    SubTitleDirective
  ],
  exports: [
    // Components
    SplashScreenComponent,
    MenuBarComponent,
    HeaderComponent,
    ItemDetailsComponent,
    ProductItemComponent,
    PriceComponent,
    SearchBoxComponent,
    CategoryFilterComponent,
    BtnShapeDirective,
    DetailsComponent
  ]
})
export class SharedModule { }
