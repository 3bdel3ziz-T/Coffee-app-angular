import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ]
})
export class CartModule { }
