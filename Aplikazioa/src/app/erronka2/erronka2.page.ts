import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka2',
  templateUrl: './erronka2.page.html',
  styleUrls: ['./erronka2.page.scss'],
  standalone: false,
})

export class Erronka2Page implements OnInit {
  testua: string = '';
  testua1: string = '';
  testua2: string = '';
  audioa: string = '';
  audioa1: string = '';
  audioa2: string = '';
  testuIzkutua: string = '';
  img1: string = '';
  img2: string = '';
  img3: string = '';
  argazkiakErakutsi: boolean | null = false;
  hitzakErakutsi: boolean | null = false;
  playErakutsi: boolean | null = true;
  finishErakutsi: boolean | null = false;
  argazkiAukeratua: number | null = null;
  erantzuna: boolean | null = null;
  esaldiOndo: boolean | null = null;
  testuaIkusi: boolean = false;
  erronka: number = 0;
  hitzOrdena = 0;
  erronkaId: number = 2;
  esaldiZuzena: string[] = ['1. Barrenak', '2. harkaitzetan', '3. zuloak', '4. egiten', '5. eta', '6. lehergailuak', '7. jarriz', '8. harriak', '9. puskatzeko', '10. erabiltzen', '11. zituzten', '12. .'];

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

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getAriketaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getTestuIzkutua(this.erronkaId);
    this.getAriketa1();
    this.getAriketa2();
  }

  erronkaHasi() {
    this.testua = this.testua1;
    this.argazkiakErakutsi = true;
    this.playErakutsi = false;
    this.finishErakutsi = true;
  }

  argazkiaAukeratu(argazkiId: number) {
    this.argazkiAukeratua = argazkiId;
  }

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

  audioaEntzun() {
    const audio = new Audio();
    if (this.argazkiakErakutsi) {
      audio.src = this.audioa1;
    } else if (this.hitzakErakutsi) {
      audio.src = this.audioa2;
    } else {
      audio.src = this.audioa;
    }
    audio.src = this.audioa;
    audio.load();
    audio.play();
  }

  testuaErakutsi() {
    this.testuaIkusi = true;
  }

  ariketaSubmit() {
    this.testua = this.testua2;
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

  getAriketaAzalpena(id: number) {
    this.apiService.getAriketaById(id).subscribe({
      next: (ariketak) => {
        const azalpenak = ariketak.map(a => a.azalpena);
        this.testua = azalpenak[0] || '';
        this.testua1 = azalpenak[1] || '';
        this.testua2 = azalpenak[2] || '';
      },
      error: (error) => {
        console.error('Error al obtener ariketa:', error);
      }
    });
  }

  getAriketaAudioa(id: number) {
    this.apiService.getAudioaById(id).subscribe({
      next: (audioa) => {
        const audioak = audioa.map(a => a.audioa);
        this.audioa = audioak[0] || '';
        this.audioa1 = audioak[1] || '';
        this.audioa2 = audioak[2] || '';
      },
      error: (error) => {
        console.error('Error al obtener audioa:', error);
      }
    })
  }

  getAriketa1() {
    this.apiService.getArgazkiZuzenak().subscribe({
      next: (argazkia_zuzenak) => {
        this.img1 = argazkia_zuzenak[0]?.url || '';
        this.img2 = argazkia_zuzenak[1]?.url || '';
        this.img3 = argazkia_zuzenak[2]?.url || '';
      },
      error: (error) => {
        console.error('Error al obtener imágenes:', error);
      }
    });
  }

  getAriketa2() {
    this.apiService.getOrdenatu().subscribe({
      next: (ordenatu) => {

      },
      error: (error) => {
        console.error('Error al obtener el orden de palabras:', error);
      }
    });
  }   

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronka + 2 } });
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
