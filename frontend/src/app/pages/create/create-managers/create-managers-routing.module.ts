import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateManagersPage } from './create-managers.page';

const routes: Routes = [
  {
    path: '',
    component: CreateManagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateManagersPageRoutingModule {}
