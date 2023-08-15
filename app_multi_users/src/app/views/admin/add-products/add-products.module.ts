import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductsRoutingModule } from './add-products-routing.module';
import { AddProductsComponent } from './add-products/add-products.component';


@NgModule({
  declarations: [
    AddProductsComponent
  ],
  imports: [
    CommonModule,
    AddProductsRoutingModule
  ]
})
export class AddProductsModule { }
