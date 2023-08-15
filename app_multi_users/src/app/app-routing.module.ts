import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisiteurLayoutComponent } from './layouts/visiteur-layout/visiteur-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:VisiteurLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/visiteur/home/home.module').then(m=>m.HomeModule)},
    {path:'contact',loadChildren:()=>import('./views/visiteur/contact/contact.module').then(m=>m.ContactModule)},
    {path:'about',loadChildren:()=>import('./views/visiteur/about/about.module').then(m=>m.AboutModule)}
  ]
  },
  {path:'admin',component:AdminLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'addstudents',loadChildren:()=>import('./views/admin/add-students/add-students.module').then(m=>m.AddStudentsModule)},
    {path:'addproducts',loadChildren:()=>import('./views/admin/add-products/add-products.module').then(m=>m.AddProductsModule)}
  ]
  },
  {path:'user',component:UserLayoutComponent,
  children:[
    {path:'home',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'viewstudents',loadChildren:()=>import('./views/user/view-students/view-students.module').then(m=>m.ViewStudentsModule)},
    {path:'viewproducts',loadChildren:()=>import('./views/user/view-products/view-products.module').then(m=>m.ViewProductsModule)},
    {path:'viewcards',loadChildren:()=>import('./views/user/view-cards/view-cards.module').then(m=>m.ViewCardsModule)}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
