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
  testua1: string = '';
  testua2: string = '';
  audioa: string = '';
  audioa1: string = '';
  audioa2: string = '';
  testuIzkutua: string = '';
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
  erronka: number = 0;
  erronkaId: number = 3;

  aukerak: string[] = [];

  leftItems: { id: number, name: string }[] = [];
  rightItems: { id: number, name: string }[] = [];

  ordenaZuzena = [
    { left: 1, right: 4 },
    { left: 2, right: 5 },
    { left: 3, right: 6 }
  ];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getAriketaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getTestuIzkutua(this.erronkaId);
    this.getAriketa1();
    this.getAriketa2();
  }

  erronkaHasi() {
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
      this.testua = this.testua2;
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
    if (this.erantzunakErakutsi) {
      audio.src = this.audioa;
    } else if (this.hitzakErakutsi) {
      audio.src = this.audioa2;
    } else {
      audio.src = this.audioa1;
    }
    audio.load();
    audio.play();
  }

  testuaErakutsi() {
    this.testuaIkusi = true;
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 4 } });
  }

  getAriketaAzalpena(id: number) {
    this.apiService.getAriketaById(id).subscribe({
      next: (ariketa) => {
        const azalpenak = ariketa.map(a => a.azalpena);
        this.testua = azalpenak[0] || '';
        this.testua2 = azalpenak[2] || '';
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
        this.audioa1 = audioak[1] || '';
        this.audioa2 = audioak[2] || '';
      },
      error: (error) => {
        console.error('Error al obtener audioa:', error);
      }
    })
  }

  getAriketa1() {
    this.apiService.getAukeraZuzenak().subscribe({
      next: (aukeraZuzenak) => {
        const ariketa5 = aukeraZuzenak.filter(item => item.id_ariketa === 5);
        this.aukerak = ariketa5.map(item => item.esaldia);
      },
      error: (error) => {
        console.error('Error al obtener ariketa:', error);
      }
    })
  }

  getAriketa2() {
    this.apiService.getParekatzekoGalderak().subscribe({
      next: (parekatzekoak) => {
        const sortedItems = parekatzekoak.sort((a, b) => a.erlazioa - b.erlazioa);
        this.leftItems = sortedItems.filter(item => item.id <= 3).map(item => ({ id: item.id, name: item.aukera }));
        this.rightItems = sortedItems.filter(item => item.id > 3).map(item => ({ id: item.id, name: item.aukera }));
      },
      error: (error) => {
        console.error('Error al obtener ariketa:', error);
      }
    })
  }

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronka + 3 } });
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
