import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: false,
})

export class MapaPage implements OnInit, OnDestroy {
  erronkaId: number | null = 1;
  private erronkak: any[] = [];
  private koordenadak = { latitud: 0, longitud: 0 };
  private margenError = 0.001;
  private watchId: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['erronka']) {
        this.erronkaId = +params['erronka'];
      }
    });

    this.getKoordenadak();
    this.getPuntuak();
  }

  getKoordenadak() {
    if (navigator.geolocation) {
      this.watchId = navigator.geolocation.watchPosition(
        (position) => {
          this.koordenadak.latitud = position.coords.latitude;
          this.koordenadak.longitud = position.coords.longitude;
          // console.log('Koordenadak:', this.koordenadak);
        },
        (error) => console.error('Error obteniendo ubicación', error),
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );
    }
  }

  lekuanBadago(): number | null {
    return this.erronkaId;
    // for (const erronka of this.erronkak) {
    //   if (
    //     Math.abs(this.koordenadak.latitud - erronka.latitud) < this.margenError &&
    //     Math.abs(this.koordenadak.longitud - erronka.longitud) < this.margenError
    //   ) {
    //     console.log('Koordenadak:', this.erronkak);
    //     return erronka.id;
    //   }
    // }
    return null;
  }

  testuaIkusi() {
    this.router.navigate(['/testua'], { queryParams: { erronka: this.erronkaId } });
  }

  erronkaHasi() {
    const erronkaIdLocalizado = this.lekuanBadago();
    if (erronkaIdLocalizado === this.erronkaId) {
      this.router.navigate(['/aurkezpena', erronkaIdLocalizado]);
    } else {
      console.log('Ez zaude kokalekuan.');
    }
  }

  getPuntuak() {
    this.apiService.getLokalizazioak().subscribe({
      next: (lokalizazioak) => {
        this.erronkak = lokalizazioak.map((item: any) => ({
          id: item.id,
          latitud: item.lat,
          longitud: item.alt
        }));
      },
      error: (error) => {
        console.error('Error al obtener los puntos:', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }
}
