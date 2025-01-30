import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: false,
})
export class MapaPage implements OnInit {
  
  private erronkas = [
    { id: 1, latitud: 43.1794257, longitud: -2.491341 },
    { id: 2, latitud: 43.1800000, longitud: -2.492000 },
    { id: 3, latitud: 43.1810000, longitud: -2.493000 },
    { id: 4, latitud: 43.1820000, longitud: -2.494000 },
    { id: 5, latitud: 43.1830000, longitud: -2.495000 },
    { id: 6, latitud: 43.1840000, longitud: -2.496000 },
    { id: 7, latitud: 43.1850000, longitud: -2.497000 },
    { id: 8, latitud: 43.1860000, longitud: -2.498000 }
  ];

  private coordenadasUsuario = { latitud: 0, longitud: 0 };
  private margenError = 0.01;

  constructor(private router: Router) {}

  ngOnInit() {
    this.obtenerCoordenadasUsuario();
  }

  obtenerCoordenadasUsuario() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          this.coordenadasUsuario.latitud = position.coords.latitude;
          this.coordenadasUsuario.longitud = position.coords.longitude;
        },
      );
    }
  }

  lekuanBadago(): number | null {
    for (const erronka of this.erronkas) {
      if (
        Math.abs(this.coordenadasUsuario.latitud - erronka.latitud) < this.margenError &&
        Math.abs(this.coordenadasUsuario.longitud - erronka.longitud) < this.margenError
      ) {
        return erronka.id;
      }
    }
    return null;
  }

  erronkaHasi() {
    const erronkaId = this.lekuanBadago();
    if (erronkaId !== null) {
      this.router.navigate([`/erronka${erronkaId}`]);
    }
  }
}
