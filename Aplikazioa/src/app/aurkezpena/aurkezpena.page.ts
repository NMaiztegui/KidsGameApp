import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-aurkezpena',
  templateUrl: './aurkezpena.page.html',
  styleUrls: ['./aurkezpena.page.scss'],
  standalone: false,
})
export class AurkezpenaPage implements OnInit {
  fullText: string = '';
  displayedText: string = '';
  index: number = 0;
  speed: number = 100;
  erronkaId: number | null = null;
  playErakutsi: boolean | null = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.erronkaId = +params.get('id')!;
      console.log('Erronka ID desde URL:', this.erronkaId);

      this.loadErronkaAzalpena(this.erronkaId);
    });
  }

  startTextAnimation() {
    this.displayedText = '';
    this.index = 0;

    // Texto de ejemplo
    const text = this.fullText;

    // Dividir el texto en dos mitades equilibradas
    const words = text.split(' ');
    const middleIndex = Math.floor(words.length / 2);

    const firstHalf = words.slice(0, middleIndex).join(' ');
    const secondHalf = words.slice(middleIndex).join(' ');

    let currentText = firstHalf; // Empezamos con la primera parte
    let part = 1; // Controla qué parte se está mostrando

    const showNextWord = () => {
        this.displayedText = ''; // Reiniciar el texto mostrado
        let wordIndex = 0;

        const wordInterval = setInterval(() => {
            if (wordIndex < currentText.split(' ').length) {
                this.displayedText += currentText.split(' ')[wordIndex] + ' ';
                wordIndex++;
            } else {
                clearInterval(wordInterval);

                if (part === 1) {
                    // Si terminamos la primera parte, esperamos y mostramos la segunda
                    setTimeout(() => {
                        currentText = secondHalf;
                        part = 2;
                        showNextWord();
                    }, 6000); // Puedes ajustar la pausa entre partes
                } else {
                    this.playErakutsi = true; // Animación terminada
                }
            }
        }, this.speed);
    };

    showNextWord();
}


  audioaEntzun() {
    const audio = new Audio();
    audio.src = `assets/audio/aurkezpena${this.erronkaId}.m4a`;
    audio.load();
    audio.play();
  }

  loadErronkaAzalpena(id: number) {
    this.apiService.getErronkaById(id).subscribe({
      next: (erronka) => {
        console.log('Erronka azalpena:', erronka);
        this.fullText = erronka?.azalpena || 'Testurik ez dago ID honetarako.';
        this.startTextAnimation();
      },
      error: (error) => {
        console.error('Error al obtener erronka:', error);
      }
    })
  }
}
