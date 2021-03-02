import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBoatsPage } from './list-boats.page';

const routes: Routes = [
  {
    path: '',
    component: ListBoatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBoatsPageRoutingModule {}
