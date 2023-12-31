import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { VisiteurLayoutComponent } from './visiteur-layout/visiteur-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    VisiteurLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
