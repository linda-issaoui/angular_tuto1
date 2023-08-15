import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCardsRoutingModule } from './view-cards-routing.module';
import { ViewCardsComponent } from './view-cards/view-cards.component';


@NgModule({
  declarations: [
    ViewCardsComponent
  ],
  imports: [
    CommonModule,
    ViewCardsRoutingModule
  ]
})
export class ViewCardsModule { }
