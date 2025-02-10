import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testua',
  templateUrl: './testua.page.html',
  styleUrls: ['./testua.page.scss'],
  standalone: false,
})
export class TestuaPage implements OnInit {

  erronka: number = 0;
  orria: number = 0;

  testuak: string[] = [
    "Aspaldian, Trapagaran misteriotsuan, meatzari ausartak mendietan sartzen ziren altxor ezkutuak ateratzeko; hain zuzen, herriari bizia ematen zioten mineral distiratsuak.",
    "Herritarren artean, Dolores Ibarruri izeneko emakume berezi bat oso maitatua zen.",
    "Handik ez oso urrun, Gallartan, meatzariek lehia zirraragarria ospatzen zuten: altzairuzko barra izugarriekin zuloak egiten zituzten harkaitzetan! Nork azkarrago egiten zuen ikustea benetako ikuskizuna zen.",
    "Makinak iritsi eta beren lekua hartu bazuten ere, tradizio horren emozioak bizirik dirau.",
    "1890ean, meatzariek euren unerik zailenetako bat bizi izan zuten. Greba handi bat hasi zen lankide batzu bidegabeki kaleratu zituztenean. Baina ez zuten amore eman, eta azkenean, haien bizitzak hobetu zituen akordio bat irabazi zuten, Loma Ituna bezala ezaguna.",
    "Gainera, funikularra, asmakizun harrigarria, agertu zen. Garraio magiko horrek Trapagarango jendea Zugaztietara eramaten zuen minutu gutxitan, bizitza askoz errazagoa eginez.",
    "Gaur egun, meategiak itxita badaude ere, Zugaztieta leku berezia da oraindik. Aintzinako putzuak laku eder bihurtu ziren, eta familiak herrian hain gustuko dituzten babarrun gozoak jatera joaten dira.",
    "Testu guztiak lortuta, ikus dezagun esanahia",
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.erronka = +params['erronka'] || 0;
    });
  }

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronka } });
  }

  avanzarPagina() {
    if ((this.orria + 1) * 3 < this.testuak.length) {
      this.orria++;
    }
  }

  retrocederPagina() {
    if (this.orria > 0) {
      this.orria--;
    }
  }

  get orriakGuztira(): number[] {
    return Array.from({ length: Math.ceil(this.testuak.length / 3) });
  }  
}