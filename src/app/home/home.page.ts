import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0, // Indica que el slide inicial será el primero
    slidesPerView: 1, // Indica que solo se permita un slide por vista
    centeredSlides: true, // Indica que los slides estarán centrados
    speed: 400 // Indica que la velocidad de transición seará de 400 ms
  }

  constructor() {}

}
