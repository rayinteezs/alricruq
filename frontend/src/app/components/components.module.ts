import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SwiperModule } from 'swiper/angular';





@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent
  ],
  exports: [
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class ComponentsModule { }
