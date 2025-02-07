import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erronka4',
  templateUrl: './erronka4.page.html',
  styleUrls: ['./erronka4.page.scss'],
  standalone: false,
})
export class Erronka4Page implements OnInit {
  testua: string = 'Kaixo! Erronka honetan argazkian agertzen den pertsonaia meatzariz mozorratu nahi da. Zein elementu erabiliko ditu?.';
  erantzuna: boolean | null = null;
  argazkiAukeratua: number | null = null;
  argazkiAukeratuak: number[] = [];
  testuaIkusi: boolean = false;
  playErakutsi: boolean | null = true;
  ariketaErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erronka: number = 0;

  constructor(private router: Router) { }

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
    if (this.argazkiAukeratuak.includes(2) && this.argazkiAukeratuak.includes(3) && this.argazkiAukeratuak.includes(5) && this.argazkiAukeratuak.includes(8)) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.argazkiAukeratuak = [];
  }

  audioaEntzun() {
    const audio = new Audio();
    audio.src = 'assets/audio/erronka4.m4a';
    audio.load();
    audio.play();
  }

  testuaErakutsi() {
    this.testuaIkusi = true;
  }
  
  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 5 } });
  }

  ngOnInit() {
  }

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronka + 4} });
  }
}
