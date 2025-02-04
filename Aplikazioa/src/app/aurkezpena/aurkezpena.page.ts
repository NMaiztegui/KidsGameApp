import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aurkezpena',
  templateUrl: './aurkezpena.page.html',
  styleUrls: ['./aurkezpena.page.scss'],
  standalone: false,
})
export class AurkezpenaPage implements OnInit {

  erronkaId: number | null = null;  // Se inicializa como null

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    this.route.paramMap.subscribe(params => {
      this.erronkaId = +params.get('id')!;  // 'id' es el nombre del parámetro en la ruta
      console.log('Erronka ID desde URL:', this.erronkaId);
    });
  }
}


