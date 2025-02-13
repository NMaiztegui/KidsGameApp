import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka1',
  templateUrl: './erronka1.page.html',
  styleUrls: ['./erronka1.page.scss'],
  standalone: false,
})

export class ErronkaPage implements OnInit, OnDestroy {
  testua: string = '';
  audioa: string = '';
  textHutsunea: string = '';
  textOsoa: string = '';
  testuIzkutua: string = '';
  letras: string[] = [];
  erantzuna: boolean | null = null;
  testuaIkusi: boolean = false;
  playErakutsi: boolean | null = true;
  ariketaErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erronka: number = 0;
  moveTextUp: boolean = false;
  erronkaId: number = 1;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getAriketaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getTestuIzkutua(this.erronkaId);
    this.getAriketa(this.erronkaId);
    Keyboard.addListener('keyboardDidShow', () => {
      this.moveTextUp = true;
    });

    Keyboard.addListener('keyboardDidHide', () => {
      this.moveTextUp = false;
    });
  }

  ngOnDestroy() {
    Keyboard.removeAllListeners();
  }

  erronkaHasi() {
    this.letras = this.textHutsunea.split('').map((char) => (char === '_' ? '' : char));
    this.playErakutsi = false;
    this.ariketaErakutsi = true;
    this.finishErakutsi = true;
  }

  erantzunaEgiaztatu() {
    const respuesta = this.letras.join('').toLowerCase();

    if (respuesta === this.textOsoa.toLowerCase()) {
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

  hizkiaIrakurri(event: any, index: number) {
    let letraIngresada = event.target.value.toLowerCase();

    if (letraIngresada.match(/^[a-zA-ZñÑ]$/)) {
      this.letras[index] = letraIngresada;
    } else {
      this.letras[index] = '';
    }

    setTimeout(() => {
      event.target.value = '';
    }, 50);
  }

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronka + 1 } });
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
    })
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
    })
  }

  getAriketa(id: number) {
    this.apiService.getHizkiakBete(id).subscribe({
      next: (hizkia) => {
        this.textHutsunea = hizkia?.text_hutsunea || 'Hitzik ez dago ID honetarako.';
        this.textOsoa = hizkia?.text_osoa || 'Hitzik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener ariketa:', error);
      }
    })
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

