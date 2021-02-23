import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListManagersPageRoutingModule } from './list-managers-routing.module';

import { ListManagersPage } from './list-managers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListManagersPageRoutingModule
  ],
  declarations: [ListManagersPage]
})
export class ListManagersPageModule {}
