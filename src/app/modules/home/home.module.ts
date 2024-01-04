import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    //Modules
    CommonModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,

  ],
  exports: [
  ]
})
export class HomeModule { }
