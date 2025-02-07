import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka1',
  templateUrl: './erronka1.page.html',
  styleUrls: ['./erronka1.page.scss'],
  standalone: false,
})

export class ErronkaPage implements OnInit {
  testua: string = '';
  audioa: string = '';
  textHutsunea = '';
  textOsoa = '';

  letras = this.textHutsunea.split('').map((char) => (char === '_' ? '' : char));
  erantzuna: boolean | null = null;
  testuaIkusi: boolean = false;
  playErakutsi: boolean | null = true;
  ariketaErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erronkaId: number = 1;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getAriketaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getAriketa();
  }

  erronkaHasi() {
    this.playErakutsi = false;
    this.ariketaErakutsi = true;
    this.finishErakutsi = true;
  }

  erantzunaEgiaztatu() {
    const respuesta = this.letras.join('');

    if (respuesta === this.textOsoa) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }
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
    this.router.navigate(['/mapa'], { queryParams: { erronka: 2 } });
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.letras = this.textHutsunea.split('').map((char) => (char === '_' ? '' : char));
  }

  getAriketaAzalpena(id: number) {
    this.apiService.getAriketaById(id).subscribe({
      next: (ariketa) => {
        console.log('Erronka azalpena:', ariketa?.azalpena);
        this.testua = ariketa?.azalpena || 'Testurik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener erronka:', error);
      }
    })
  }

  getAriketaAudioa(id: number) {
    this.apiService.getAudioaById(this.erronkaId).subscribe({
      next: (audioa) => {
        console.log('Audioa:', audioa?.audioa);
        this.audioa = audioa?.audioa || 'Audiorik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener audioa:', error);
      }
    })
  }

  getAriketa() {
    this.apiService.getHizkiakBete(this.textHutsunea, this.textOsoa).subscribe({
      next: (hizkiak) => {
        this.textHutsunea === hizkiak?.textHutsunea || 'Hitzik ez dago ID honetarako.';
        this.textOsoa === hizkiak?.textOsoa || 'Hitzik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener ariketa:', error);
      }
    })
  }
}
