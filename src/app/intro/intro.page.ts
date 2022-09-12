import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    initialSlide: 0, // Indica que el slide inicial será el primero
    slidesPerView: 1, // Indica que solo se permita un slide por vista
    centeredSlides: true, // Indica que los slides estarán centrados
    speed: 400 // Indica que la velocidad de transición seará de 400 ms
  }

  slides = [
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Platzi music logo",
      title: "Escucha tu música",
      subtitle: "En cualquier lugar",
      description: "Los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.",
      icon: "play"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Platzi music logo",
      title: "Disfruta de nuestro reproductor",
      subtitle: "De videos increíbles",
      description: "Entra al modo video de nuestro reproductor y obtén acceso a clips, documentales y making offs increíbles de tu artista favorito.",
      icon: "videocam"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Platzi music logo",
      title: "Accede al exclusivo",
      subtitle: "Modo deporte",
      description: "Crea un playlist basado en tu actividad física. Ten reportes y acceso a lo que necesitas, intégralo con GPS.",
      icon: "bicycle"
    }
  ]

  constructor(private router: Router, private storage: Storage) { }

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }

  async ngOnInit() {
    await this.storage.create();
  }

}
