import { Component, OnInit, OnDestroy } from '@angular/core';
import { GestureController, Gesture } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-erronka8',
  templateUrl: './erronka8.page.html',
  styleUrls: ['./erronka8.page.scss'],
  standalone: false,
})

export class Erronka8Page implements OnInit, OnDestroy {
  testua: string = 'Azken erronkan, aurkitu letra-zopa honetan ikasi dugun guztiarekin lotutako 7 hitzak!';
  words = ['IBARRURI', 'BABARRUNAK', 'MEATEGIA', 'HARRIA', 'OSTION', 'GREBA', 'FUNIKULAR'];
  grid: string[] = [];
  gridSize = 12;
  selectedLetters: number[] = [];
  confirmedLetters: Set<number> = new Set();
  foundWords: Set<string> = new Set();
  timer: number = 300;
  wordsLeft: number = this.words.length;
  interval: any;
  isMouseDown: boolean = false;
  startIndex: number = -1;
  erantzuna: boolean | null = null;
  testuaIkusi: boolean = false;
  playErakutsi: boolean | null = true;
  ariketaErakutsi: boolean | null = false;
  gesture!: Gesture;
  erronkaId: number = 8;

  constructor(private router: Router, private gestureCtrl: GestureController, private apiService: ApiService) { }

  ngOnInit() {
    this.generateGrid();
    this.startTimer();
    this.initializeGesture();
  }

  erronkaHasi() {
    this.playErakutsi = false;
    this.ariketaErakutsi = true;
  }

  ngOnDestroy() {
    if (this.gesture) {
      this.gesture.destroy();
    }
  }

  generateGrid() {
    let gridArray = new Array(this.gridSize * this.gridSize).fill(null);
    const directions = [
      { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: -1, y: 1 },
      { x: -1, y: 0 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: 1, y: -1 }
    ];

    this.words.forEach((word) => {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < 200) {
        let direction = directions[Math.floor(Math.random() * directions.length)];
        let startX = Math.floor(Math.random() * this.gridSize);
        let startY = Math.floor(Math.random() * this.gridSize);

        if (this.canPlaceWord(gridArray, word, startX, startY, direction)) {
          word.split('').forEach((char, i) => {
            gridArray[(startY + i * direction.y) * this.gridSize + (startX + i * direction.x)] = char;
          });
          placed = true;
        }
        attempts++;
      }
    });

    this.grid = gridArray.map((char) => char || String.fromCharCode(65 + Math.floor(Math.random() * 26)));
  }

  canPlaceWord(gridArray: string[], word: string, startX: number, startY: number, direction: { x: number, y: number }): boolean {
    for (let i = 0; i < word.length; i++) {
      let x = startX + i * direction.x;
      let y = startY + i * direction.y;
      if (x < 0 || x >= this.gridSize || y < 0 || y >= this.gridSize || gridArray[y * this.gridSize + x]) {
        return false;
      }
    }
    return true;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  initializeGesture() {
    const gridElement = document.querySelector('.letter-grid');
    if (gridElement) {
      this.gesture = this.gestureCtrl.create({
        el: gridElement,
        gestureName: 'letra-zopa',
        threshold: 0,
        onStart: (ev) => this.handleGestureStart(ev),
        onMove: (ev) => this.handleGestureMove(ev),
        onEnd: (ev) => this.handleGestureEnd(ev)
      });
      this.gesture.enable();
    }
  }

  private getLetterIndexFromPoint(x: number, y: number): number | null {
    const element = document.elementFromPoint(x, y) as HTMLElement;
    if (element && element.classList.contains('letter')) {
      const indexString = element.getAttribute('data-index');
      return indexString !== null ? parseInt(indexString, 10) : null;
    }
    return null;
  }

  handleGestureStart(ev: any) {
    ev.event.preventDefault();
    const index = this.getLetterIndexFromPoint(ev.currentX, ev.currentY);
    if (index !== null) {
      this.isMouseDown = true;
      this.startIndex = index;
      this.selectedLetters = [index];
    }
  }

  handleGestureMove(ev: any) {
    if (!this.isMouseDown) return;
    ev.event.preventDefault();
    const index = this.getLetterIndexFromPoint(ev.currentX, ev.currentY);
    if (index !== null) {
      this.continueSelection(index);
    }
  }

  handleGestureEnd(ev: any) {
    this.endSelection();
  }

  continueSelection(index: number) {
    const startCoord = this.getCoordinates(this.startIndex);
    const currentCoord = this.getCoordinates(index);
    const dx = currentCoord.col - startCoord.col;
    const dy = currentCoord.row - startCoord.row;

    let stepX = 0;
    let stepY = 0;

    if (dx === 0 && dy !== 0) {
      stepY = dy > 0 ? 1 : -1;
    } else if (dy === 0 && dx !== 0) {
      stepX = dx > 0 ? 1 : -1;
    } else if (Math.abs(dx) === Math.abs(dy)) {
      stepX = dx > 0 ? 1 : -1;
      stepY = dy > 0 ? 1 : -1;
    } else {
      return;
    }

    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    const newSelection: number[] = [];
    for (let i = 0; i <= steps; i++) {
      const row = startCoord.row + i * stepY;
      const col = startCoord.col + i * stepX;
      if (row < 0 || row >= this.gridSize || col < 0 || col >= this.gridSize) break;
      newSelection.push(row * this.gridSize + col);
    }
    this.selectedLetters = newSelection;
  }

  endSelection() {
    this.isMouseDown = false;
    const selectedWord = this.selectedLetters.map(index => this.grid[index]).join('');
    if (this.words.includes(selectedWord) && !this.foundWords.has(selectedWord)) {
      this.foundWords.add(selectedWord);
      this.wordsLeft = this.words.length - this.foundWords.size;
      this.selectedLetters.forEach(index => this.confirmedLetters.add(index));
    }
    this.selectedLetters = [];
    this.startIndex = -1;
  }

  getCoordinates(index: number): { row: number, col: number } {
    return {
      row: Math.floor(index / this.gridSize),
      col: index % this.gridSize
    };
  }

  toggleWord(word: string) {
    if (this.foundWords.has(word)) {
      this.foundWords.delete(word);
    } else {
      this.foundWords.add(word);
    }
    this.wordsLeft = this.words.length - this.foundWords.size;
  }

  erantzunaEgiaztatu() {
    if (this.foundWords.size === this.words.length) {
      this.erantzuna = true;
    } else {
      this.erantzuna = false;
    }
  }

  ariketaBerregin() {
    this.erantzuna = null;

    if (this.foundWords.size === 0) {
      this.confirmedLetters.clear();
    }
  }

  audioaEntzun() {
    const audio = new Audio();
    audio.src = 'assets/audio/erronka8.m4a';
    audio.load();
    audio.play();
  }

  testuaErakutsi() {
    this.testuaIkusi = true;
  }

  erronkaSubmit() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: 9 } });
  }
}