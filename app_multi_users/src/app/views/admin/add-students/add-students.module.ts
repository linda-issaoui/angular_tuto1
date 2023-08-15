import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStudentsRoutingModule } from './add-students-routing.module';
import { AddStudentsComponent } from './add-students/add-students.component';


@NgModule({
  declarations: [
    AddStudentsComponent
  ],
  imports: [
    CommonModule,
    AddStudentsRoutingModule
  ]
})
export class AddStudentsModule { }
