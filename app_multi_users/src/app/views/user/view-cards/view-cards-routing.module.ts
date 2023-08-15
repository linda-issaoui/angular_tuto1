import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCardsComponent } from './view-cards/view-cards.component';

const routes: Routes = [
  {path:'',component:ViewCardsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCardsRoutingModule { }
