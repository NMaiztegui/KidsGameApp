import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testua',
  templateUrl: './testua.page.html',
  styleUrls: ['./testua.page.scss'],
  standalone: false,
})
export class TestuaPage implements OnInit {

  erronka: number = 0;
  

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['erronka']) {
        this.erronka = +params['erronka'];
      }
    });
  }

  mapaIkusi() {
    this.router.navigate(['/mapa'], { queryParams: { erronka: this.erronka } });
  }


}
