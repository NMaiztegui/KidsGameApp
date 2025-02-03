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
    { id: 2, name: 'Langileen Nazioarteko Eguna' },
    { id: 3, name: 'Jeneral bat negoziatzera bidali zuten' }
  ];

  lines: any[] = [];
  draggingItem: any = null;
  currentLine: any = null;

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

  erantzunaEgiaztatu() {
    if (this.erantzunakErakutsi === true) {
      if (this.erantzunAukeratua === 1) {
        this.erantzuna = true;
      } else {
        this.erantzuna = false;
      }
    }
  }

  ariketaSubmit() {
    if (this.erantzuna === true) {
      this.testua = 'Funtsezko pertsonaiak eta gertaerak erlazionatu. Lotu itzazu beraien artean.';
    }
    this.erantzuna = null;
    this.erantzunakErakutsi = null;
    this.hitzakErakutsi = true;
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.erantzunAukeratua = null;
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 3 } });
  }

  ngOnInit() {
  }
}
