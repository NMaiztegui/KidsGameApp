import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka3',
  templateUrl: './erronka3.page.html',
  styleUrls: ['./erronka3.page.scss'],
  standalone: false,
})

export class Erronka3Page implements OnInit {
  testua: string = '';
  audioa: string = '';
  erantzunakErakutsi: boolean | null = false;
  hitzakErakutsi: boolean | null = false;
  playErakutsi: boolean | null = true;
  finishErakutsi: boolean | null = false;
  erantzunAukeratua: number | null = null;
  erantzuna: boolean | null = null;
  esaldiOndo: boolean | null = null;
  leftSelected: number | null = null;
  pairs: { id: number, left: number, right: number }[] = [];
  pairCounter: number = 1;
  testuaIkusi: boolean = false;
  erronkaId: number = 3;

  aukerak = [
    "Lan egiteari uztea protestan.",
    "Jaiegun batean lana egitea.",
    "Lan gehiago egitea."
  ];

  leftItems = [
    { id: 1, name: 'Loma' },
    { id: 2, name: 'Maiatzaren 1a' },
    { id: 3, name: 'Orconera' }
  ];

  rightItems = [
    { id: 1, name: 'Kaleratutako 5 meatzarien enpresa' },
    { id: 2, name: 'Jeneral bat negoziatzera bidali zuten' },
    { id: 3, name: 'Langileen Nazioarteko Eguna' }
  ];

  ordenaZuzena = [
    { left: 1, right: 2 },
    { left: 2, right: 3 },
    { left: 3, right: 1 }
  ];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getErronkaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getAriketa1();
    this.getAriketa2();
  }

  erronkaHasi() {
    this.getAriketaAzalpena(this.erronkaId);
    this.testua = 'Zer da greba bat? Hautatu erantzun zuzena hurrengo hiru aukeretatik.';
    this.erantzunakErakutsi = true;
    this.playErakutsi = false;
    this.finishErakutsi = true;
  }

  erantzunaAukeratu(erantzunaId: number) {
    this.erantzunAukeratua = erantzunaId;
  }

  selectLeft(id: number) {
    this.leftSelected = id;
  }

  selectRight(id: number) {
    if (this.leftSelected !== null) {
      this.pairs.push({ id: this.pairCounter, left: this.leftSelected, right: id });
      this.leftSelected = null;
      this.pairCounter++;
    }
  }

  getPairNumber(leftId: number): number | null {
    const pair = this.pairs.find(p => p.left === leftId);
    return pair ? pair.id : null;
  }

  getPairNumberReverse(rightId: number): number | null {
    const pair = this.pairs.find(p => p.right === rightId);
    return pair ? pair.id : null;
  }

  erantzunaEgiaztatu() {
    if (this.erantzunakErakutsi === true) {
      if (this.erantzunAukeratua === 1) {
        this.erantzuna = true;
      } else {
        this.erantzuna = false;
      }
    } else if (this.hitzakErakutsi === true) {
      this.erantzuna = this.pairs.length === this.ordenaZuzena.length &&
        this.pairs.every(pair =>
          this.ordenaZuzena.some(correctPair =>
            correctPair.left === pair.left && correctPair.right === pair.right
          )
        );
    }
  }

  ariketaSubmit() {
    if (this.erantzuna === true && this.erantzunakErakutsi === true) {
      this.testua = 'Funtsezko pertsonaiak eta gertaerak erlazionatu. Lotu itzazu beraien artean.';
      this.hitzakErakutsi = true;
    }
    this.erantzuna = null;
    this.erantzunakErakutsi = null;
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.erantzunAukeratua = null;
    this.pairs = [];
    this.pairCounter = 1;
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
    this.router.navigate(['/mapa'], { queryParams: { erronka: 4 } });
  }

  getErronkaAzalpena(id: number) {
    this.apiService.getErronkaById(id).subscribe({
      next: (erronka) => {
        console.log('Erronka azalpena:', erronka?.azalpena);
        this.testua = erronka?.azalpena || 'Testurik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener erronka:', error);
      }
    })
  }

  getAriketaAzalpena(id: number) {
    this.apiService.getAriketaById(id).subscribe({
      next: (ariketa) => {
        console.log('Ariketa azalpena:', ariketa?.azalpena);
        this.testua = ariketa?.azalpena || 'Testurik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener erronka:', error);
      }
    })
  }

  getAriketaAudioa(id: number) {
    this.apiService.getAudioaById(id).subscribe({
      next: (audioa) => {
        console.log('Audioa:', audioa?.audioa);
        this.audioa = audioa?.audioa || 'Audiorik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener audioa:', error);
      }
    })
  }

  getAriketa1() {
    this.apiService.getAukeraZuzenak().subscribe({
      next: () => {

      },
      error: (error) => {
        console.error('Error al obtener ariketa:', error);
      }
    })
  }

  getAriketa2() {
    this.apiService.getParekatzekoGalderak().subscribe({
      next: () => {

      },
      error: (error) => {
        console.error('Error al obtener ariketa:', error);
      }
    })
  }
}
