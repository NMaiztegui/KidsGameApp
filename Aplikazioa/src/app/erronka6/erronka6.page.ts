import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka6',
  templateUrl: './erronka6.page.html',
  styleUrls: ['./erronka6.page.scss'],
  standalone: false,
})
export class Erronka6Page implements OnInit {
  testua: string = '';
  audioa: string = '';
  testuIzkutua: string = '';
  playErakutsi: boolean | null = true;
  hitzakErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erantzuna: boolean | null = null;
  hitzAukeratua: string | null = null;
  testuaIkusi: boolean = false;
  erronkaId: number = 6;

  hitzak: any[] = [];
  esaldiak = [ 
    { testua1: 'Zugaztieta gaur egun aisialdirako leku ederra da, baina lurrak oraindik kolore', hutsa: '', testua2: '.', hitzEgokia: 'gorrixka', beteta: false },
    { testua1: 'Zugaztietan badaude meatzaritza garaiak gogorarazten dituzten elementuak, esate baterako,', hutsa: '', testua2: 'eta', hitzEgokia: 'eskulturak', beteta: false },
    { testua1: '', hutsa: '', testua2: 'zaharrak.', hitzEgokia: 'bagoneta', beteta: false },
    { testua1: 'Erromatarren garaian bazekiten Zugaztietan', hutsa: '', testua2: 'zeudela.', hitzEgokia: 'mineralak', beteta: false },
    { testua1: 'Industria Iraultzan, XIX. mendearen amaieran, mineralak askoz gehiago', hutsa: '', testua2: 'ziren.', hitzEgokia: 'ateratzen', beteta: false },
    { testua1: 'Azken meategia Zugaztietan', hutsa: '', testua2: 'urtean itxi zen.', hitzEgokia: '1993', beteta: false },
    { testua1: 'Meategiak itxi ondoren, lur azpiko urak zuloak bete zituen, eta lakuak sortu ziren, adibidez,', hutsa: '', testua2: 'lakua.', hitzEgokia: 'Ostion', beteta: false }
  ]; 

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getAriketaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getTestuIzkutua(this.erronkaId);
    this.getHitzakBete(this.erronkaId);
  }

  erronkaHasi() {
    this.playErakutsi = false;
    this.hitzakErakutsi = true;
    this.finishErakutsi = true;
  }

  hitzaAukeratu(hitza: any) {
    if (this.hitzAukeratua === hitza.hitza) {
      this.hitzAukeratua = null;
      hitza.aukeratuta = false;
    } else {
      this.hitzak.forEach(h => h.aukeratuta = false);
      hitza.aukeratuta = true;
      this.hitzAukeratua = hitza.hitza;
    }
  }

  hitzHutsaAukeratu(esaldia: any) {
    if (this.hitzAukeratua) {
      esaldia.hutsa = this.hitzAukeratua;
      esaldia.beteta = true;

      const hitzaObj = this.hitzak.find(h => h.hitza === this.hitzAukeratua);
      if (hitzaObj) {
        hitzaObj.hitzErabilia = true;
        hitzaObj.aukeratuta = false;
      }
      this.hitzAukeratua = null;
    }
  }

  erantzunaEgiaztatu() {
    const zuzena = this.esaldiak.every(esaldia => esaldia.hutsa === esaldia.hitzEgokia);
    this.erantzuna = zuzena;
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.hitzAukeratua = null;

    this.hitzak.forEach(h => {
      h.aukeratuta = false;
      h.hitzErabilia = false;
    });

    this.esaldiak.forEach(e => {
      e.hutsa = '';
      e.beteta = false;
    });
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
    this.router.navigate(['/mapa'], { queryParams: { erronka: 7 } });
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
  
  getHitzakBete(id: number) {
    this.apiService.getEsaldiaBete().subscribe({
      next: (hitzak) => {
        this.hitzak = hitzak || [];
        console.log('Hitzak:', this.hitzak);
      },
      error: (error) => {
        console.error('Error al obtener hitzak:', error);
      }
    });
  }

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronkaId + 1 } });
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
