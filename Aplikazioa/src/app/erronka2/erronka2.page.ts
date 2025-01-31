import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erronka2',
  templateUrl: './erronka2.page.html',
  styleUrls: ['./erronka2.page.scss'],
  standalone: false,
})
export class Erronka2Page implements OnInit {
  testua: string = 'Kaixo! Erronka honetan harri zulatzaileen inguruko 2 galdera erantzun beharko dituzue.';
  argazkiakErakutsi: boolean | null = false;
  hitzakErakutsi: boolean | null = false;
  playErakutsi: boolean | null = true;
  finishErakutsi: boolean | null = false;
  imagenSeleccionada: number | null = null;
  erantzuna: boolean | null = null;
  hitzakOrdenatzeko: string[] = ['harkaitzetan', 'harriak', 'egiten', 'zituzten', 'Barrenak', 'lehergailuak', 'jarriz', '.', 'erabiltzen', 'zuloak', 'puskatzeko', 'eta'];
  hitzakAukeratu: string[] = [];
  hitzakPosizioa: { hitza: string; top: string; left: string }[] = [];
  esaldiZuzena: string[] = ['Barrenak', 'harkaitzetan', 'zuloak', 'egiten', 'eta', 'lehergailuak', 'jarriz', 'harriak', 'puskatzeko', 'erabiltzen', 'zituzten', '.'];
  esaldiOndo: boolean | null = null;

  constructor(private router: Router) { }

  erronkaHasi() {
    this.testua = 'Ondorengo argazkietatik, zeinek erakusten du harrizulatzaile bat ? Hautatu erantzun zuzena.';
    this.argazkiakErakutsi = true;
    this.playErakutsi = false;
    this.finishErakutsi = true;
  }

  argazkiaAukeratu(imagenId: number) {
    this.imagenSeleccionada = imagenId;
  }

  hitzaAukeratu(hitza: string) {
    if (!this.hitzakAukeratu.includes(hitza)) {
      this.hitzakAukeratu.push(hitza);
    }
  }

  erantzunaEgiaztatu() {
    if (this.argazkiakErakutsi === true) {
      if (this.imagenSeleccionada === 3) {
        this.erantzuna = true;
      } else {
        this.erantzuna = false;
      }
    } else {
      if (JSON.stringify(this.hitzakAukeratu) === JSON.stringify(this.esaldiZuzena)) {
        this.erantzuna = true;
      } else {
        this.erantzuna = false;
      }
    }
  }

  ariketaSubmit() {
    this.testua = 'Zein da harrizulatzaile baten lana? Ordenatu esaldia, hitzen gainean klik eginez.';
    this.erantzuna = null;
    this.argazkiakErakutsi = null;
    this.hitzakErakutsi = true;
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.hitzakAukeratu = [];
    this.desordenatuHitzak();
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 3 } });
  }

  ngOnInit() {
    this.desordenatuHitzak();
  }
  
  desordenatuHitzak() {
    this.hitzakPosizioa = this.hitzakOrdenatzeko.map((hitza) => ({
      hitza,
      top: `${Math.floor(Math.random() * 70) + 10}%`,
      left: `${Math.floor(Math.random() * 80) + 10}%`,
    }));
  }
}
