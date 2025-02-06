import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erronka1',
  templateUrl: './erronka1.page.html',
  styleUrls: ['./erronka1.page.scss'],
  standalone: false,
})
export class ErronkaPage implements OnInit {
  testua: string = 'Kaixo! Erronka honetan Ibarrurik utzitako mezua deszifratu beharko duzue, hutsune bakoitzean letra bat jarriz bere esanahia osatzeko.';

  constructor(private router: Router) { }

  erronkaTestua = 'Tx_kit_tik Tr_p_ga_anek_ m_ateg_etat_k mu_itu i_an na_z. Ni_e ha_rtzaro_ren zati_ik han_ien_ ing_ru hauet_n eman dut, f_mi_ia eta sen_rrare_in ego_eko. Horre_aiti_, her_i eta ingu_uko se_retu gehi_nak dakizkit. Ib_lbid_an zehar desku_ritzek_ pre_t zaud_te?';
  erantzunZuzena = 'Txikitatik Trapagaraneko meategietatik mugitu izan naiz. Nire haurtzaroaren zatirik handiena inguru hauetan eman dut, familia eta senarrarekin egoteko. Horregaitik, herri eta inguruko sekretu gehienak dakizkit. Ibilbidean zehar deskubritzeko prest zaudete?';

  letras = this.erronkaTestua.split('').map((char) => (char === '_' ? '' : char));
  
  erantzuna: boolean | null = null;
  testuaIkusi: boolean = false;
  playErakutsi: boolean | null = true;
  ariketaErakutsi: boolean | null = false;
  finishErakutsi: boolean | null = false;

  erronkaHasi() {
    this.playErakutsi = false;
    this.ariketaErakutsi = true;
    this.finishErakutsi = true;
  }

  erantzunaEgiaztatu() {
    const respuesta = this.letras.join('').toLowerCase();
    
    if (respuesta === this.erantzunZuzena.toLowerCase()) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }
  }

  audioaEntzun() {
    const audio = new Audio();
    audio.src = 'assets/audio/erronka1.m4a';
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
    this.letras = this.erronkaTestua.split('').map((char) => (char === '_' ? '' : char));
  }

  // Método para procesar la entrada del usuario
  procesarLetra(event: any, index: number) {
    let letraIngresada = event.target.value.toLowerCase(); // Convertir a minúscula

    if (letraIngresada.match(/^[a-zA-ZñÑ]$/)) { // Solo acepta letras
      this.letras[index] = letraIngresada;
    } else {
      this.letras[index] = ''; // Si no es una letra válida, se borra
    }

    setTimeout(() => {
      event.target.value = ''; // Borra el input después de escribir
    }, 50);
  }

  ngOnInit() {
  }

}
