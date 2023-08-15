import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStudentsComponent } from './view-students/view-students.component';

const routes: Routes = [
  {path:'',component:ViewStudentsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewStudentsRoutingModule { }
