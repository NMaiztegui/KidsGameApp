import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erronka3',
  templateUrl: './erronka3.page.html',
  styleUrls: ['./erronka3.page.scss'],
  standalone: false,
})

export class Erronka3Page implements OnInit {
  testua: string = 'Kaixo! Erronka honetan hainbat galdera erantzun beharko dituzue testu izkutua lortzeko.';
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

  constructor(private router: Router) { }

  erronkaHasi() {
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
    audio.src = 'assets/audio/erronka3.m4a';
    audio.load();
    audio.play();
  }

  testuaErakutsi() {
    this.testuaIkusi = true;
  }
  
  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 4 } });
  }

  ngOnInit() {
  }
}
