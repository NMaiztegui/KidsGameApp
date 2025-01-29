import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erronka',
  templateUrl: './erronka.page.html',
  styleUrls: ['./erronka.page.scss'],
  standalone: false,
})
export class ErronkaPage implements OnInit {

  constructor() { }

  testua = 'Tx_kit_tik Tr_p_ga_anek_ m_ateg_etat_k mu_itu i_an na_z. Ni_e ha_rtzaro_ren zati_ik han_ien_ ing_ru hauet_n eman dut, f_mi_ia eta sen_rrare_in ego_eko. Horre_aiti_, her_i eta ingu_uko se_retu gehi_nak dakizkit. Ib_lbid_an zehar desku_ritzek_ pre_t  zaud_te?';

  letras = this.testua.split('').map((char) => (char === '_' ? '' : char));

  erantzuna: boolean | null = null;

  erantzunaEgiaztatu() {
    const respuesta = this.letras.join('');

    if (respuesta === this.testua) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }
  }

  reiniciarAriketa() {
    this.erantzuna = null;
    this.letras = this.testua.split('').map((char) => (char === '_' ? '' : char));
  }

  ngOnInit() {
  }

}
