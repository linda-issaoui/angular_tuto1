import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './layouts/user/user.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthAdminComponent } from './layouts/auth-admin/auth-admin.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allstudents',loadChildren:()=>import('./views/admin/all-students/all-students.module').then(m=>m.AllStudentsModule)},
    {path:'addstudents',loadChildren:()=>import('./views/admin/add-students/add-students.module').then(m=>m.AddStudentsModule)}
  ]
  },
  {path:'',component:UserComponent,children:[
    {path:'',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'home',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'login',loadChildren:()=>import('./views/user/login/login.module').then(m=>m.LoginModule)}
  ]},
  {path:'admin/login',component:AuthAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
