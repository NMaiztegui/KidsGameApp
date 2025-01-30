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
  argazkiakErakutsi: boolean | null = true;
  playErakutsi: boolean | null = true;
  finishErakutsi: boolean | null = false;
  imagenSeleccionada: number | null = null;
  erantzuna: boolean | null = null;

  constructor(private router: Router) { }

  erronkaHasi() {
    this.testua = 'Ondorengo argazkietatik, zeinek erakusten du harrizulatzaile bat ? Hautatu erantzun zuzena.';
    this.argazkiakErakutsi = false;
    this.playErakutsi = false;
    this.finishErakutsi = true;
  }

  seleccionarImagen(imagenId: number) {
    this.imagenSeleccionada = imagenId;
  }

  erantzunaEgiaztatu() {
    if (this.imagenSeleccionada === 3) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }

    if (this.erantzuna === null && this.argazkiakErakutsi === null) {
      
    }
  }

  ariketaSubmit() {
    this.testua = 'Zein da harrizulatzaile baten lana? Ordenatu esaldia, hitzen gainean klik eginez.';
    this.erantzuna = null;
    this.argazkiakErakutsi = null;
  }

  ariketaBerregin() {
    this.erantzuna = null;
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 3 } });
  }

  ngOnInit() {
  }
}
