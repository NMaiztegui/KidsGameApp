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
  argazkiAukeratua: number | null = null;
  erantzuna: boolean | null = null;
  esaldiZuzena: string[] = ['1. Barrenak', '2. harkaitzetan', '3. zuloak', '4. egiten', '5. eta', '6. lehergailuak', '7. jarriz', '8. harriak', '9. puskatzeko', '10. erabiltzen', '11. zituzten', '12. .'];
  esaldiOndo: boolean | null = null;

  hitzakPosizioa = [
    { hitza: 'harkaitzetan', top: '70vh', left: '5vw', numero: null, aukeratuta: false },
    { hitza: 'harriak', top: '50vh', left: '6vw', numero: null, aukeratuta: false },
    { hitza: 'egiten', top: '65vh', left: '30vw', numero: null, aukeratuta: false },
    { hitza: 'zituzten', top: '40vh', left: '60vw', numero: null, aukeratuta: false },
    { hitza: 'Barrenak', top: '50vh', left: '25vw', numero: null, aukeratuta: false },
    { hitza: 'lehergailuak', top: '82vh', left: '24vw', numero: null, aukeratuta: false },
    { hitza: 'jarriz', top: '80vh', left: '58vw', numero: null, aukeratuta: false },
    { hitza: '.', top: '53vh', left: '47vw', numero: null, aukeratuta: false },
    { hitza: 'erabiltzen', top: '65vh', left: '53vw', numero: null, aukeratuta: false },
    { hitza: 'zuloak', top: '33vh', left: '40vw', numero: null, aukeratuta: false },
    { hitza: 'puskatzeko', top: '48vh', left: '79vw', numero: null, aukeratuta: false },
    { hitza: 'eta', top: '62vh', left: '75vw', numero: null, aukeratuta: false }
  ];

  hitzakAukeratu: { hitza: string; numero: number | null }[] = [];

  constructor(private router: Router) { }

  erronkaHasi() {
    this.testua = 'Ondorengo argazkietatik, zeinek erakusten du harrizulatzaile bat ? Hautatu erantzun zuzena.';
    this.argazkiakErakutsi = true;
    this.playErakutsi = false;
    this.finishErakutsi = true;
  }

  argazkiaAukeratu(argazkiId: number) {
    this.argazkiAukeratua = argazkiId;
  }

  hitzOrdena = 0;

  hitzaAukeratu(item: any) {
    if (item.numero === null) {
      this.hitzOrdena++;
      item.numero = this.hitzOrdena;
      item.aukeratuta = true;
      this.hitzakAukeratu.push({ hitza: item.hitza, numero: item.numero });
    }
  }

  erantzunaEgiaztatu() {
    if (this.argazkiakErakutsi === true) {
      if (this.argazkiAukeratua === 3) {
        this.erantzuna = true;
      } else {
        this.erantzuna = false;
      }
    } else {
      const hitzakOrdenatuta = this.hitzakAukeratu
        .sort((a, b) => (a.numero || 0) - (b.numero || 0))
        .map(item => item.hitza);
  
      const esaldiZuzenaHitzak = this.esaldiZuzena.map(item => item.split('. ')[1]);
  
      if (JSON.stringify(hitzakOrdenatuta) === JSON.stringify(esaldiZuzenaHitzak)) {
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
    this.hitzOrdena = 0;
  
    this.hitzakPosizioa.forEach((item) => {
      item.numero = null;
      item.aukeratuta = false;
    });
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 3 } });
  }

  ngOnInit() {
  }
}
