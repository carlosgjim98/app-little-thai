import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.page.html',
  styleUrls: ['./cover-page.page.scss'],
})
export class CoverPagePage implements OnInit {

  private swiper: Swiper; 

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {


    
    this.swiper = new Swiper(".mySwiper", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
      grabCursor: true,
      simulateTouch: true,

    });

    

    this.swiper.on('slideChange',  () => {
     
    });

    
  }

}
