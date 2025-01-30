import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erronka1',
  templateUrl: './erronka1.page.html',
  styleUrls: ['./erronka1.page.scss'],
  standalone: false,
})
export class ErronkaPage implements OnInit {

  constructor(private router: Router) { }

  testua = 'Tx_kit_tik Tr_p_ga_anek_ m_ateg_etat_k mu_itu i_an na_z. Ni_e ha_rtzaro_ren zati_ik han_ien_ ing_ru hauet_n eman dut, f_mi_ia eta sen_rrare_in ego_eko. Horre_aiti_, her_i eta ingu_uko se_retu gehi_nak dakizkit. Ib_lbid_an zehar desku_ritzek_ pre_t zaud_te?';
  erantzunZuzena = 'Txikitatik Trapagaraneko meategietatik mugitu izan naiz. Nire haurtzaroaren zatirik handiena inguru hauetan eman dut, familia eta senarrarekin egoteko. Horregaitik, herri eta inguruko sekretu gehienak dakizkit. Ibilbidean zehar deskubritzeko prest zaudete?';

  letras = this.testua.split('').map((char) => (char === '_' ? '' : char));

  erantzuna: boolean | null = null;

  erantzunaEgiaztatu() {
    const respuesta = this.letras.join('');
    console.log(respuesta);
    

    if (respuesta === this.erantzunZuzena) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }
  }

  ariketaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 2 } });
  }  
  
  ariketaBerregin() {
    this.erantzuna = null;
    this.letras = this.testua.split('').map((char) => (char === '_' ? '' : char));
  }

  ngOnInit() {
  }

}
