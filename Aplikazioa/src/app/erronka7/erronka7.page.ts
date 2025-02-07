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
  playErakutsi: boolean | null = true;
  hitzakErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erantzuna: boolean | null = null;
  hitzOrdena: number = 0;
  testuaIkusi: boolean = false;
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
    this.getErronkaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getAriketa1();
  }

  erronkaHasi() {
    this.getAriketaAzalpena(this.erronkaId);
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

  getErronkaAzalpena(id: number) {
    this.apiService.getErronkaById(id).subscribe({
      next: (erronka) => {
        console.log('Erronka azalpena:', erronka?.azalpena);
        this.testua = erronka?.azalpena || 'Testurik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener erronka:', error);
      }
    })
  }

  getAriketaAzalpena(id: number) {
    this.apiService.getAriketaById(id).subscribe({
      next: (ariketa) => {
        console.log('Ariketa azalpena:', ariketa?.azalpena);
        this.testua = ariketa?.azalpena || 'Testurik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener erronka:', error);
      }
    })
  }

  getAriketaAudioa(id: number) {
    this.apiService.getAudioaById(id).subscribe({
      next: (audioa) => {
        console.log('Audioa:', audioa?.audioa);
        this.audioa = audioa?.audioa || 'Audiorik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener audioa:', error);
      }
    })
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

}
