import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Erronka } from '../classes/erronka';
import { ArgazkiaZuzena } from '../classes/argazkia-zuzena';
import { Ariketa } from '../classes/ariketa';
import { Audioa } from '../classes/audioa';
import { AukeraZuzena } from '../classes/aukera-zuzena';
import { Erantzunak } from '../classes/erantzunak';
import { EsaldiaBete } from '../classes/esaldia-bete';
import { Funikularra } from '../classes/funikularra';
import { HizkiakBete } from '../classes/hizkiak-bete';
import { Lokalizazioa } from '../classes/lokalizazioa';
import { MutikoaJantzi } from '../classes/mutikoa-jantzi';
import { Ordenatu } from '../classes/ordenatu';
import { ParekatzekoGaldera } from '../classes/parekatzeko-galdera';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private storage!: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private urlbase= 'http://10.0.2.2:8000/api';
  constructor(
    private httpClient: HttpClient,
   ) { }

  // obtener datos de la tabal Erronka

  getErronkak(): Observable<Erronka[]>{
    return this.httpClient.get<Erronka[]>(`${this.urlbase}/erronkak`);
  }

  getArgazkiZuzenak():Observable<ArgazkiaZuzena[]>{
    return this.httpClient.get<ArgazkiaZuzena[]>(`${this.urlbase}/argazki-zuzena`);
  }
  getArikteak():Observable<Ariketa[]>{
    return this.httpClient.get<Ariketa[]>(`${this.urlbase}/ariketak`);
  }
  gertAudioak():Observable<Audioa[]>{
    return this.httpClient.get<Audioa[]>(`${this.urlbase}/audioak`);
  }

  getAukeraZuzenak():Observable<AukeraZuzena[]>{
    return this.httpClient.get<AukeraZuzena[]>(`${this.urlbase}/aukera-zuzena`);
  }

  gertErantzunak():Observable<Erantzunak[]>{
    return this.httpClient.get<Erantzunak[]>(`${this.urlbase}/erantzunak`);
  }

  getEsaldiaBete():Observable<EsaldiaBete[]>{
    return this.httpClient.get<EsaldiaBete[]>(`${this.urlbase}/esaldia-bete`);
  }

  getFunikularrak():Observable<Funikularra[]>{
    return this.httpClient.get<Funikularra[]>(`${this.urlbase}/funikularra`);
  }

  getHizkiakBete():Observable<HizkiakBete[]>{
    return this.httpClient.get<HizkiakBete[]>(`${this.urlbase}/hizkiak-bete`);
  }

  getLokalizazioak():Observable<Lokalizazioa[]>{
    return this.httpClient.get<Lokalizazioa[]>(`${this.urlbase}/lokalizazioa`);
  }

  getMutikoaJantzi():Observable<MutikoaJantzi[]>{
    return this.httpClient.get<MutikoaJantzi[]>(`${this.urlbase}/mutikua-jantzi`);
  }

  getOrdenatu():Observable<Ordenatu[]>{
    return this.httpClient.get<Ordenatu[]>(`${this.urlbase}/ordenatu`);
  }

  getParekatzekoGalderak():Observable<ParekatzekoGaldera[]>{
    return this.httpClient.get<ParekatzekoGaldera[]>(`${this.urlbase}/parekatzeko-galdera`);
  }
}
