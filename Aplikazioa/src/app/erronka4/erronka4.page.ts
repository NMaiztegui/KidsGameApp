import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka4',
  templateUrl: './erronka4.page.html',
  styleUrls: ['./erronka4.page.scss'],
  standalone: false,
})

export class Erronka4Page implements OnInit {
  testua: string = '';
  audioa: string = '';
  imgUrls: string[] = [];
  erantzuna: boolean | null = null;
  argazkiAukeratuak: Set<number> = new Set();
  testuaIkusi: boolean = false;
  playErakutsi: boolean | null = true;
  ariketaErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erronkaId: number = 4;
  erantzunEgokiak = new Set([2, 3, 5, 8]);

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getAriketaAzalpena();
    this.getAriketaAudioa();
    this.getAriketa1();
  }

  erronkaHasi() {
    this.playErakutsi = false;
    this.ariketaErakutsi = true;
    this.finishErakutsi = true;
  }

  argazkiaAukeratu(argazkiId: number) {
    if (this.argazkiAukeratuak.has(argazkiId)) {
      this.argazkiAukeratuak.delete(argazkiId);
    } else if (this.argazkiAukeratuak.size < 4) {
      this.argazkiAukeratuak.add(argazkiId);
    }
  }

  erantzunaEgiaztatu() {
    this.erantzuna = this.argazkiAukeratuak.size === this.erantzunEgokiak.size &&
      [...this.argazkiAukeratuak].every(id => this.erantzunEgokiak.has(id));
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.argazkiAukeratuak.clear();
  }

  audioaEntzun() {
    const audio = new Audio(this.audioa);
    audio.play();
  }

  testuaErakutsi() {
    this.testuaIkusi = true;
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 5 } });
  }

  getAriketaAzalpena() {
    this.apiService.getAriketaById(this.erronkaId).subscribe({
      next: (ariketa) => {
        this.testua = ariketa[0]?.azalpena || 'Testurik ez dago ID honetarako.';
      },
      error: (error) => console.error('Error al obtener erronka:', error),
    });
  }

  getAriketaAudioa() {
    this.apiService.getAudioaById(this.erronkaId).subscribe({
      next: (audioa) => {
        this.audioa = audioa[0]?.audioa || '';
      },
      error: (error) => console.error('Error al obtener audioa:', error),
    });
  }

  getAriketa1() {
    this.apiService.getMutikoaJantzi().subscribe({
      next: (mutikoa) => {
        this.imgUrls = mutikoa.map(item => item.url) || [];
      },
      error: (error) => console.error('Error al obtener ariketa:', error),
    });
  }

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronkaId + 1 } });
  }
}
