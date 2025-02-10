import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka1',
  templateUrl: './erronka1.page.html',
  styleUrls: ['./erronka1.page.scss'],
  standalone: false,
})

export class ErronkaPage implements OnInit, OnDestroy {
  testua: string = '';
  audioa: string = '';
  textHutsunea = 'Tx_kit_tik Tr_p_ga_anek_ m_ateg_etat_k mu_itu i_an na_z. Ni_e ha_rtzaro_ren zati_ik han_ien_ ing_ru hauet_n eman dut, f_mi_ia eta sen_rrare_in ego_eko. Horre_aiti_, her_i eta ingu_uko se_retu gehi_nak dakizkit. Ib_lbid_an zehar desku_ritzek_ pre_t zaud_te?';
  textOsoa = 'Txikitatik Trapagaraneko meategietatik mugitu izan naiz. Nire haurtzaroaren zatirik handiena inguru hauetan eman dut, familia eta senarrarekin egoteko. Horregaitik, herri eta inguruko sekretu gehienak dakizkit. Ibilbidean zehar deskubritzeko prest zaudete?';

  letras = this.textHutsunea.split('').map((char) => (char === '_' ? '' : char));
  erantzuna: boolean | null = null;
  testuaIkusi: boolean = false;
  playErakutsi: boolean | null = true;
  ariketaErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;
  erronka: number = 0;
  moveTextUp: boolean = false;
  erronkaId: number = 1;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getAriketaAzalpena(this.erronkaId);
    this.getAriketaAudioa(this.erronkaId);
    this.getAriketa();
    Keyboard.addListener('keyboardDidShow', () => {
      this.moveTextUp = true;
    });

    Keyboard.addListener('keyboardDidHide', () => {
      this.moveTextUp = false;
    });
  }

  ngOnDestroy() {
    Keyboard.removeAllListeners();
  }

  erronkaHasi() {
    this.playErakutsi = false;
    this.ariketaErakutsi = true;
    this.finishErakutsi = true;
  }

  erantzunaEgiaztatu() {
    const respuesta = this.letras.join('').toLowerCase();

    if (respuesta === this.textOsoa.toLowerCase()) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }
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
    this.router.navigate(['/mapa'], { queryParams: { erronka: 2 } });
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.letras = this.textHutsunea.split('').map((char) => (char === '_' ? '' : char));
  }

  hizkiaIrakurri(event: any, index: number) {
    let letraIngresada = event.target.value.toLowerCase();

    if (letraIngresada.match(/^[a-zA-ZñÑ]$/)) {
      this.letras[index] = letraIngresada;
    } else {
      this.letras[index] = '';
    }

    setTimeout(() => {
      event.target.value = '';
    }, 50);
  }

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronka + 1 } });
  }

  getAriketaAzalpena(id: number) {
    this.apiService.getAriketaById(id).subscribe({
      next: (ariketa) => {
        this.testua = ariketa?.azalpena || 'Testurik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener erronka:', error);
      }
    })
  }

  getAriketaAudioa(id: number) {
    this.apiService.getAudioaById(this.erronkaId).subscribe({
      next: (audioa) => {
        this.audioa = audioa?.audioa || 'Audiorik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener audioa:', error);
      }
    })
  }

  getAriketa() {
    this.apiService.getHizkiakBete(this.textHutsunea, this.textOsoa).subscribe({
      next: (hizkiak_bete) => {
        // this.textHutsunea = hizkiak_bete?.text_hutsunea || 'Hitzik ez dago ID honetarako.';
        // this.textOsoa = hizkiak_bete?.text_osoa || 'Hitzik ez dago ID honetarako.';
      },
      error: (error) => {
        console.error('Error al obtener ariketa:', error);
      }
    })
  }
}

