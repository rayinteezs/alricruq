import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListManagersPageRoutingModule } from './list-managers-routing.module';

import { ListManagersPage } from './list-managers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListManagersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListManagersPage]
})
export class ListManagersPageModule {}
