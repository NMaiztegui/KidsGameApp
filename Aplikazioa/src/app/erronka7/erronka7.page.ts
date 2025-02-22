import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka7',
  templateUrl: './erronka7.page.html',
  styleUrls: ['./erronka7.page.scss'],
  standalone: false,
})
export class Erronka7Page implements OnInit {
  testua: string = '';
  audioa: string = '';
  testuIzkutua: string = '';
  playErakutsi: boolean | null = true;
  hitzakErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erantzuna: boolean | null = null;
  hitzOrdena: number = 0;
  testuaIkusi: boolean = false;
  erronka: number = 0;
  erronkaId: number = 7;

  hitzakPosizioa = [
    { hitza: 'Prest jateko!', top: '70vh', left: '5vw', numero: null, aukeratuta: false },
    { hitza: 'Ura berotu.', top: '50vh', left: '6vw', numero: null, aukeratuta: false },
    { hitza: 'Ziurtatu beharrezko material eta osagai guztiak dituzula.', top: '65vh', left: '30vw', numero: null, aukeratuta: false },
    { hitza: 'Babarrunak uretara bota.', top: '40vh', left: '60vw', numero: null, aukeratuta: false },
    { hitza: 'Itxaron hoztu arte.', top: '50vh', left: '25vw', numero: null, aukeratuta: false },
    { hitza: 'Babarrunak eginda daudenean, beste elikagaiak nahastu babarrunekin.', top: '70vh', left: '50vw', numero: null, aukeratuta: false }
  ];

  hitzakAukeratu: { hitza: string; numero: number | null }[] = [];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getAriketaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getTestuIzkutua(this.erronkaId);
    this.getAriketa1();
  }

  erronkaHasi() {
    this.playErakutsi = false;
    this.hitzakErakutsi = true;
    this.finishErakutsi = true;
  }

  hitzaAukeratu(item: any) {
    if (item.aukeratuta) {
      this.hitzakAukeratu = this.hitzakAukeratu.filter(h => h.hitza !== item.hitza);
      
      this.hitzakAukeratu.forEach((h, index) => h.numero = index + 1);
      
      item.numero = null;
      item.aukeratuta = false;

      this.hitzOrdena--;
    } else {
      this.hitzOrdena++;
      item.numero = this.hitzOrdena;
      item.aukeratuta = true;
      this.hitzakAukeratu.push({ hitza: item.hitza, numero: item.numero });
    }
  }

  erantzunaEgiaztatu() {
    const esaldiZuzena = [
      'Ziurtatu beharrezko material eta osagai guztiak dituzula.',
      'Babarrunak uretara bota.',
      'Ura berotu.',
      'Babarrunak eginda daudenean, beste elikagaiak nahastu babarrunekin.',
      'Itxaron hoztu arte.',
      'Prest jateko!'
    ];

    const hitzakOrdenatuta = this.hitzakAukeratu
      .sort((a, b) => (a.numero || 0) - (b.numero || 0))
      .map(item => item.hitza);

    this.erantzuna = JSON.stringify(hitzakOrdenatuta) === JSON.stringify(esaldiZuzena);
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
    this.router.navigate(['/mapa'], { queryParams: { erronka: 8 } });
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

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronka + 7} });
  }

  getAriketa1() {
    this.apiService.getOrdenatu().subscribe({
      next: () => {

      },
      error: (error) => {
        console.error('Error al obtener ariketa:', error);
      }
    })
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
