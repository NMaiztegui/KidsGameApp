import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aurkezpena',
  templateUrl: './aurkezpena.page.html',
  styleUrls: ['./aurkezpena.page.scss'],
  standalone: false,
})
export class AurkezpenaPage implements OnInit {

  fullText: string = 'Dolores herri honen historia eta garrantzia oso ondo ezagutzen  dituen andre bat da. Politikari espainiarra izan zelako da ezaguna batez ere, baina hori alde batera utzita ondo ezagutzen zuen La Arboledako eta inguruko meatzaritzaren historia osoa...';
  displayedText: string = ''; // Texto que se mostrará progresivamente
  index: number = 0;
  speed: number = 55; // Velocidad en ms

  erronkaId: number | null = null;  // Se inicializa como null

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    this.route.paramMap.subscribe(params => {
      this.erronkaId = +params.get('id')!;  // 'id' es el nombre del parámetro en la ruta
      console.log('Erronka ID desde URL:', this.erronkaId);
    });

    this.showText();
  }

  showText() {
    const interval = setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayedText += this.fullText[this.index];
        this.index++;
      } else {
        this.index = 0;
        clearInterval(interval); // Detener cuando termina
      }
    }, this.speed);
  }
}


