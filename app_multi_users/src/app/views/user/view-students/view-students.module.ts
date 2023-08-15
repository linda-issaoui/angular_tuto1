import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewStudentsRoutingModule } from './view-students-routing.module';
import { ViewStudentsComponent } from './view-students/view-students.component';


@NgModule({
  declarations: [
    ViewStudentsComponent
  ],
  imports: [
    CommonModule,
    ViewStudentsRoutingModule
  ]
})
export class ViewStudentsModule { }
