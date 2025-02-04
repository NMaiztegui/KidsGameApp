import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erronka8',
  templateUrl: './erronka8.page.html',
  styleUrls: ['./erronka8.page.scss'],
  standalone: false,
})

export class Erronka8Page implements OnInit {
  testua: string = 'Azken erronka honetan, aurkitu letra-zopa honetan ikasi dugun guztiarekin lotutako 7 hitzak!';
  erantzuna: boolean | null = null;
  letraSopa: string[][] = [
    ['A', 'R', 'A', 'L', 'U', 'K', 'I', 'N', 'U', 'F'],
    ['U', 'B', 'H', 'T', 'D', 'O', 'H', 'Y', 'E', 'O'],
    ['S', 'I', 'R', 'U', 'R', 'R', 'A', 'B', 'I', 'O'],
    ['E', 'B', 'I', 'T', 'D', 'X', 'R', 'Y', 'K', 'S'],
    ['A', 'B', 'N', 'T', 'D', 'M', 'I', 'Y', 'U', 'T'],
    ['T', 'B', 'H', 'T', 'D', 'S', 'A', 'Y', 'L', 'I'],
    ['M', 'E', 'A', 'T', 'E', 'G', 'I', 'A', 'D', 'O'],
    ['G', 'R', 'E', 'B', 'A', 'W', 'U', 'Y', 'X', 'N'],
    ['A', 'B', 'H', 'T', 'D', 'N', 'U', 'Y', 'I', 'O'],
    ['B', 'A', 'B', 'A', 'R', 'R', 'U', 'N', 'A', 'K']
  ];
  selected: boolean[][] = Array.from({ length: 10 }, () => Array(10).fill(false));
  hitzak: string[] = ['Ibarruri', 'Babarrunak', 'Meategia', 'Harria', 'Ostion', 'Greba', 'Funikular'];
  hitzAukeratua: string = '';

  constructor(private router: Router) { }

  selectLetter(i: number, j: number) {
    this.selected[i][j] = !this.selected[i][j];
    this.hitzAukeratua += this.letraSopa[i][j];
  }

  erantzunaEgiaztatu() {
    if (this.hitzak.includes(this.hitzAukeratua)) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }
    this.hitzAukeratua = '';
  }

  ariketaBerregin() {
    this.erantzuna = null;
    this.selected = Array.from({ length: 10 }, () => Array(10).fill(false));
    this.hitzAukeratua = '';
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 9 } });
  }

  ngOnInit() {
  }

}
