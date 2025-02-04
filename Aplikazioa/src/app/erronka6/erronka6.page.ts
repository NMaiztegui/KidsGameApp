import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erronka6',
  templateUrl: './erronka6.page.html',
  styleUrls: ['./erronka6.page.scss'],
  standalone: false,
})
export class Erronka6Page implements OnInit {
  testua: string = 'Jarduera honetan, esaldietan agertzen diren hutsuneak bete beharko dituzue. Horretarako, goian agertzen diren hitzetatik egokia dena aukeratu eta bere lekura arrastratu.';
  playErakutsi: boolean | null = true;
  hitzakErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erantzuna: boolean | null = null;
  hitzAukeratua: string | null = null;

  hitzak = [
    { hitza: 'Eskulturak', aukeratuta: false, hitzErabilia: false },
    { hitza: 'Ostion', aukeratuta: false, hitzErabilia: false },
    { hitza: 'gorrixka', aukeratuta: false, hitzErabilia: false },
    { hitza: 'bagoneta', aukeratuta: false, hitzErabilia: false },
    { hitza: 'ateratzen', aukeratuta: false, hitzErabilia: false },
    { hitza: 'mineralak', aukeratuta: false, hitzErabilia: false },
    { hitza: '1993', aukeratuta: false, hitzErabilia: false }
  ];

  esaldiak = [
    { testua1: 'Zugaztieta gaur egun aisialdirako leku ederra da, baina lurrak oraindik kolore', hutsa: '', testua2: '.', hitzEgokia: 'gorrixka', beteta: false },
    { testua1: 'Zugaztietan badaude meatzaritza garaiak gogorarazten dituzten elementuak, esate baterako,', hutsa: '', testua2: 'eta', hitzEgokia: 'Eskulturak', beteta: false },
    { testua1: '', hutsa: '', testua2: 'zaharrak.', hitzEgokia: 'bagoneta', beteta: false },
    { testua1: 'Erromatarren garaian bazekiten Zugaztietan', hutsa: '', testua2: 'zeudela.', hitzEgokia: 'mineralak', beteta: false },
    { testua1: 'Industria Iraultzan, XIX. mendearen amaieran, mineralak askoz gehiago', hutsa: '', testua2: 'ziren.', hitzEgokia: 'ateratzen', beteta: false },
    { testua1: 'Azken meategia Zugaztietan', hutsa: '', testua2: 'urtean itxi zen.', hitzEgokia: '1993', beteta: false },
    { testua1: 'Meategiak itxi ondoren, lur azpiko urak zuloak bete zituen, eta lakuak sortu ziren, adibidez,', hutsa: '', testua2: 'lakua.', hitzEgokia: 'Ostion', beteta: false }
  ];

  constructor(private router: Router) { }

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

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 7 } });
  }

  ngOnInit() {
  }
}
