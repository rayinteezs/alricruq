import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateManagersPageRoutingModule } from './create-managers-routing.module';

import { CreateManagersPage } from './create-managers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateManagersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateManagersPage]
})
export class CreateManagersPageModule {}
