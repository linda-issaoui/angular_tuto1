import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { guardAdminGuard } from './guards/guard-admin.guard';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'about', component:AboutComponent},
  {path:'profil', component:ProfilComponent},
  {path:'contact', component:ContactComponent},
  {path:'detail',redirectTo:'about',pathMatch:'full'},
  {path:'**',component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
