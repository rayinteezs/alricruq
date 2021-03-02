import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBoatsPageRoutingModule } from './list-boats-routing.module';

import { ListBoatsPage } from './list-boats.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBoatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListBoatsPage]
})
export class ListBoatsPageModule {}
