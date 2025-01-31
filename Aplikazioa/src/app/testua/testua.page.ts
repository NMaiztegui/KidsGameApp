import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testua',
  templateUrl: './testua.page.html',
  styleUrls: ['./testua.page.scss'],
  standalone: false,
})
export class TestuaPage implements OnInit {

  constructor(private router: Router) { }

  mapaIkusi() {
    this.router.navigate(['/mapa']);
  }

  ngOnInit() {
  }

}
