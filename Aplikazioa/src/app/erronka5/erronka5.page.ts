import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erronka5',
  templateUrl: './erronka5.page.html',
  styleUrls: ['./erronka5.page.scss'],
  standalone: false,
})

export class Erronka5Page implements OnInit {
testua: string = 'Erronka honetan zuen aurrean La Reinetako funikularra duzue eta alboan hainbat elementuren argazkiak. Hauetako zein elementu garraiatzen zituzten antzinean funikularrean?';
  erantzuna: boolean | null = null;
  argazkiAukeratua: number | null = null;
  argazkiAukeratuak: number[] = [];
  testuaIkusi: boolean = false;
  playErakutsi: boolean | null = true;
  ariketaErakutsi: boolean | null = false;

  constructor(private router: Router) { }

  erronkaHasi() {
    this.playErakutsi = false;
    this.ariketaErakutsi = true;
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
    if (this.argazkiAukeratuak.includes(1) && this.argazkiAukeratuak.includes(5) && this.argazkiAukeratuak.includes(6) && this.argazkiAukeratuak.includes(7)) {
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
    audio.src = 'assets/audio/erronka5.m4a';
    audio.load();
    audio.play();
  }

  testuaErakutsi() {
    this.testuaIkusi = true;
  }
  
  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 6 } });
  }

  ngOnInit() {
  }

}
