import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent} from './pages/articulos/articulos.component';
import { AdminComponent } from './pages/admin/admin.component';
import {MenusComponent} from './pages/menus/menus.component';
import {LoginComponent} from './pages/login/login.component'
import {InfoArticulosComponent} from './pages/info-articulos/info-articulos.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },{
  path: '',
  component: MenusComponent,
  children: [{
    path: 'articulos',
    component: ArticulosComponent
  },{
    path: 'admin',
    component: AdminComponent
  },{
    path: 'articulo/:id',
    component: InfoArticulosComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
