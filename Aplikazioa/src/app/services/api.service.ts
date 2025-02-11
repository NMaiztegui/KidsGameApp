import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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
import { SqliteService } from './sqlite.service';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient, private sqliteService: SqliteService) { }

  getErronkak(): Observable<Erronka[]> {
    return from(this.sqliteService.fetchDataAndSave<Erronka>(this.httpClient, 'erronkak', 'erronkas'));
  }

  getErronkaById(id: number): Observable<Erronka | undefined> {
    return from(this.sqliteService.fetchDataAndSave<Erronka>(this.httpClient, 'erronkak', 'erronkas')).pipe(
      map(erronkak =>
        erronkak.find(erronka => erronka.id === id)),
      catchError(error => {
        console.error('Error al obtener erronka:', error);
        return of(undefined);
      })
    );
  }

  getArgazkiZuzenak(): Observable<ArgazkiaZuzena[]> {
    return from(this.sqliteService.fetchDataAndSave<ArgazkiaZuzena>(this.httpClient, 'argazkia_zuzenak', 'argazkia_zuzenas'));
  }

  getAriketak(): Observable<Ariketa[]> {
    return from(this.sqliteService.fetchDataAndSave<Ariketa>(this.httpClient, 'ariketak', 'ariketas'));
  }

  getAriketaById(id: number): Observable<Ariketa[]> {
    return from(this.sqliteService.fetchDataAndSave<Ariketa>(this.httpClient, 'ariketak', 'ariketas')).pipe(
      map(ariketak => ariketak.filter(ariketa => ariketa.id_erronka === id)),
      catchError(error => {
        console.error('Error al obtener ariketa:', error);
        return of();
      })
    );
  }

  getAudioak(): Observable<Audioa[]> {
    return from(this.sqliteService.fetchDataAndSave<Audioa>(this.httpClient, 'audioak', 'audioas'));
  }

  getAudioaById(id: number): Observable<Audioa[]> {
    return from(this.sqliteService.fetchDataAndSave<Audioa>(this.httpClient, 'audioak', 'audioas')).pipe(
      map(audioak => audioak.filter(audioa => audioa.id_erronka === id)),
      catchError(error => {
        console.error('Error al obtener audioa:', error);
        return of();
      })
    );
  }

  getAukeraZuzenak(): Observable<AukeraZuzena[]> {
    return from(this.sqliteService.fetchDataAndSave<AukeraZuzena>(this.httpClient, 'aukera-zuzenak', 'aukera_zuzenas'));
  }

  getErantzunak(): Observable<Erantzunak[]> {
    return from(this.sqliteService.fetchDataAndSave<Erantzunak>(this.httpClient, 'erantzunak', 'erantzunaks'));
  }

  getEsaldiaBete(): Observable<EsaldiaBete[]> {
    return from(this.sqliteService.fetchDataAndSave<EsaldiaBete>(this.httpClient, 'esaldia-bete', 'esaldia_betes'));
  }

  getFunikularrak(): Observable<Funikularra[]> {
    return from(this.sqliteService.fetchDataAndSave<Funikularra>(this.httpClient, 'funikularra', 'funikularras'));
  }

  getHizkiakBete(id: number): Observable<HizkiakBete | undefined> {
    return from(this.sqliteService.fetchDataAndSave<HizkiakBete>(this.httpClient, 'hizkiak_bete', 'hizkiak_betes')).pipe(
      map(hizkiak => hizkiak.find(hizkia => hizkia.id === id)),
      catchError(error => {
        console.error('Error al obtener audioa:', error);
        return of(undefined);
      })
    );
  }

  getLokalizazioak(): Observable<Lokalizazioa[]> {
    return from(this.sqliteService.fetchDataAndSave<Lokalizazioa>(this.httpClient, 'lokalizazioa', 'lokalizazioas'));
  }

  getMutikoaJantzi(): Observable<MutikoaJantzi[]> {
    return from(this.sqliteService.fetchDataAndSave<MutikoaJantzi>(this.httpClient, 'mutikua-jantzi', 'mutikoa_jantzis'));
  }

  getOrdenatu(): Observable<Ordenatu[]> {
    return from(this.sqliteService.fetchDataAndSave<Ordenatu>(this.httpClient, 'ordenatu', 'ordenatus'));
  }

  getParekatzekoGalderak(): Observable<ParekatzekoGaldera[]> {
    return from(this.sqliteService.fetchDataAndSave<ParekatzekoGaldera>(this.httpClient, 'parekatzeko-galdera', 'parekatzeko_galderas'));
  }

}




