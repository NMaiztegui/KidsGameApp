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
    "testu1",
    "testu2",
    "testu3",
    "testu4",
    "testu5",
    "testu6",
    "testu7",
    "testu8",
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