import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erronka4',
  templateUrl: './erronka4.page.html',
  styleUrls: ['./erronka4.page.scss'],
  standalone: false,
})
export class Erronka4Page implements OnInit {
  testua: string = 'Kaixo! Erronka honetan argazkian agertzen den pertsonaia meatzariz mozorratu nahi da. Zein elementu erabiliko ditu?.';
  erantzuna: boolean | null = null;
  argazkiAukeratua: number | null = null;
  argazkiAukeratuak: number[] = [];

  constructor(private router: Router) { }

  argazkiaAukeratu(argazkiId: number) {
    const index = this.argazkiAukeratuak.indexOf(argazkiId);

    if (index !== -1) {
      this.argazkiAukeratuak.splice(index, 1);
    } else {
      if (this.argazkiAukeratuak.length < 4) {
        this.argazkiAukeratuak.push(argazkiId);
      }
    }
  }

  erantzunaEgiaztatu() {
    if (this.argazkiAukeratuak.includes(2) && this.argazkiAukeratuak.includes(3) && this.argazkiAukeratuak.includes(5) && this.argazkiAukeratuak.includes(8)) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.argazkiAukeratuak = [];
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 5 } });
  }

  ngOnInit() {
  }

}
