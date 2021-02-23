import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'list-managers',
        loadChildren: () => import('../lists/list-managers/list-managers.module').then(m => m.ListManagersPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/info'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
