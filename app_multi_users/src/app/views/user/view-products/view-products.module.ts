import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProductsRoutingModule } from './view-products-routing.module';
import { ViewProductsComponent } from './view-products/view-products.component';


@NgModule({
  declarations: [
    ViewProductsComponent
  ],
  imports: [
    CommonModule,
    ViewProductsRoutingModule
  ]
})
export class ViewProductsModule { }
