import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: false,
})
export class MapaPage implements OnInit, OnDestroy {
  erronkaId: number | null = 1;
  private erronkak = [
    { id: 1, latitud: 43.3027548237599, longitud: -3.0336377921477373 },
    { id: 2, latitud: 43.3056657009205, longitud: -3.0382160860316530 },
    { id: 3, latitud: 43.3025794652629, longitud: -3.0379269306284584 },
    { id: 4, latitud: 43.3127509757964, longitud: -3.0703448218122120 },
    { id: 5, latitud: 43.2936099918257, longitud: -3.0488334363648195 },
    { id: 6, latitud: 43.2854881155322, longitud: -3.0526958172215270 },
    { id: 7, latitud: 43.2856130756894, longitud: -3.0553565684783703 },
  ];
  private koordenadak = { latitud: 0, longitud: 0 };
  private margenError = 0.001;
  private intervalId: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['erronka']) {
        this.erronkaId = +params['erronka'];
      }
    });

    this.getKoordenadak();
  }

  getKoordenadak() {
    if (navigator.geolocation) {
      this.intervalId = setInterval(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.koordenadak.latitud = position.coords.latitude;
            this.koordenadak.longitud = position.coords.longitude;
            console.log('Koordenadak:', this.koordenadak);
          },
          (error) => console.error('Errorrea koordenadak lortzen', error),
          { enableHighAccuracy: true }
        );
      }, 10000); // Koordenadak lortu 10 segunduro
    }
  }

  lekuanBadago(): number | null {
    return this.erronkaId;
  }

  testuaIkusi() {
    this.router.navigate(['/testua']);
  }

  erronkaHasi() {
    const erronkaIdLocalizado = this.lekuanBadago();
    if (erronkaIdLocalizado === this.erronkaId) {
      window.location.href = `/erronka${erronkaIdLocalizado}`;
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
