import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListManagersPage } from './list-managers.page';

const routes: Routes = [
  {
    path: '',
    component: ListManagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListManagersPageRoutingModule {}
