import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { AuthAdminComponent } from './auth-admin/auth-admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    AuthAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
