import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka5',
  templateUrl: './erronka5.page.html',
  styleUrls: ['./erronka5.page.scss'],
  standalone: false,
})
export class Erronka5Page implements OnInit {
  testua: string = '';
  audioa: string = '';
  testuIzkutua: string = '';
  erantzuna: boolean | null = null;
  argazkiAukeratua: number | null = null;
  argazkiAukeratuak: number[] = [];
  testuaIkusi: boolean = false;
  playErakutsi: boolean | null = true;
  ariketaErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erronka: number = 5;
  erronkaId: number = 5;
  funikularrak: any[] = [];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getAriketaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getTestuIzkutua(this.erronkaId);
    this.getFunikularrak();
  }

  erronkaHasi() {
    this.playErakutsi = false;
    this.ariketaErakutsi = true;
    this.finishErakutsi = true;
  }

  argazkiaAukeratu(argazkiId: number) {
    const index = this.argazkiAukeratuak.indexOf(argazkiId);

    if (index !== -1) {
      this.argazkiAukeratuak.splice(index, 1);
    } else {
      if (this.argazkiAukeratuak.length < 4) {
        this.argazkiAukeratuak.push(argazkiId);
      }
    }
  }

  erantzunaEgiaztatu() {
    const respuestaCorrecta = this.funikularrak.filter(f => f.zuzena === 1);

    const respuestaCorrectaIndices = respuestaCorrecta.map(f => f.id - 1);

    const respuestaSeleccionada = this.argazkiAukeratuak.length === respuestaCorrectaIndices.length &&
      this.argazkiAukeratuak.every(id => respuestaCorrectaIndices.includes(id));

    this.erantzuna = respuestaSeleccionada ? true : false;

    console.log('Respuesta correcta:', respuestaCorrectaIndices);
    console.log('Respuesta seleccionada:', this.argazkiAukeratuak);
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.argazkiAukeratuak = [];
  }

  audioaEntzun() {
    const audio = new Audio();
    audio.src = this.audioa;
    audio.load();
    audio.play();
  }

  testuaErakutsi() {
    this.testuaIkusi = true;
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 6 } });
  }

  getAriketaAzalpena(id: number) {
    this.apiService.getAriketaById(id).subscribe({
      next: (ariketa) => {
        const azalpenak = ariketa.map(a => a.azalpena);
        this.testua = azalpenak[0] || 'Testurik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener erronka:', error);
      }
    });
  }

  getAriketaAudioa(id: number) {
    this.apiService.getAudioaById(id).subscribe({
      next: (audioa) => {
        const audioak = audioa.map(a => a.audioa);
        this.audioa = audioak[0] || '';
      },
      error: (error) => {
        console.error('Error al obtener audioa:', error);
      }
    });
  }

  getFunikularrak() {
    this.apiService.getFunikularrak().subscribe({
      next: (funikularrak) => {
        this.funikularrak = funikularrak || [];
        console.log('Funikularrak:', this.funikularrak);
      },
      error: (error) => {
        console.error('Error al obtener los funikularras:', error);
      }
    });
  }

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronka + 1 } });
  }

  getTestuIzkutua(id: number) {
    this.apiService.getErronkaById(id).subscribe({
      next: (erronka) => {
        this.testuIzkutua = erronka?.testu_izkutua || '';
      },
      error: (error) => {
        console.error('Error al obtener erronka:', error);
      }
    })
  }
}
