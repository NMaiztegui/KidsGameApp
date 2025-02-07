import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-aurkezpena',
  templateUrl: './aurkezpena.page.html',
  styleUrls: ['./aurkezpena.page.scss'],
  standalone: false,
})
export class AurkezpenaPage implements OnInit {
  
  textMap: { [key: number]: string } = {
    1: 'Dolores herri honen historia eta garrantzia oso ondo ezagutzen dituen andre bat da...',
    2: 'testu 2...',
    3: 'testu 3...',
    4: 'testu 4...',
    5: 'testu 5...',
    6: 'testu 6...',
    7: 'testu 7...',
    8: 'testu 8...',
  };

  fullText: string = '';
  displayedText: string = '';
  index: number = 0;
  speed: number = 55;

  erronkaId: number | null = null;
  playErakutsi: boolean | null = false;

  constructor(private route: ActivatedRoute, private apiService:ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.erronkaId = +params.get('id')!;
      console.log('Erronka ID desde URL:', this.erronkaId);

     this.loadErronkaAzalpena(this.erronkaId);
    });
  }

  startTextAnimation() {
    this.displayedText = '';
    this.index = 0;
    
    const interval = setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayedText += this.fullText[this.index];
        this.index++;
      } else {
        this.playErakutsi = true;
        clearInterval(interval);
      }
    }, this.speed);
  }

  audioaEntzun() {
    const audio = new Audio();
    audio.src = `assets/audio/aurkezpena${this.erronkaId}.m4a`;
    audio.load();
    audio.play();
  }
  
  loadErronkaAzalpena(id:number){
    this.apiService.getErronkaById(id).subscribe({
      next:(erronka)=>{
        console.log('Erronka azalpena:', erronka);
        this.fullText = erronka?.azalpena || 'Testurik ez dago ID honetarako.';
        this.startTextAnimation();
      },
      error:(error)=>{
        console.error('Error al obtener erronka:', error);
      }
    })
  }
}
