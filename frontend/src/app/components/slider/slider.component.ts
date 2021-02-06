import { Component, AfterContentChecked, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { EffectCoverflow, SwiperOptions } from 'swiper';
import SwiperCore, {
  Pagination
} from 'swiper/core';

SwiperCore.use([Pagination, EffectCoverflow]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent

  config: SwiperOptions = {
    pagination: true,
    effect: 'coverflow'
  }

  images = [
    'assets/images/prueba1.jpg',
    'assets/images/prueba2.jpg',
    'assets/images/prueba3.jpg'
  ];

  constructor() { }

  ngAfterContentChecked(){
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

}
