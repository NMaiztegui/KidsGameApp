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



 
  constructor(
    private httpClient: HttpClient,
    private sqliteService: SqliteService,
    

   ) { }


   // Función genérica para obtener y guardar datos


  // Métodos específicos para cada entidad
  getErronkak(): Observable<Erronka[]> {
    return from(this.sqliteService.fetchDataAndSave<Erronka>(this.httpClient,'erronkak', 'erronkas'));
  }
  getERronkaById(id:number): Observable<Erronka | undefined>{
    return from(this.sqliteService.fetchDataAndSave<Erronka>(this.httpClient,'erronkak', 'erronkas')).pipe(
      map(erronkak => erronkak.find(erronka => erronka.id === id)), // Filtrar por ID
      catchError(error => {
        console.error('Error al obtener erronka:', error);
        return of(undefined); // Devuelve undefined si hay error
      })
    );
  }
//convertir promesa en observable con from
  getArgazkiZuzenak(): Observable<ArgazkiaZuzena[]> {
    return from(this.sqliteService.fetchDataAndSave<ArgazkiaZuzena>(this.httpClient,'argazki-zuzena', 'ArgazkiaZuzena'));
  }

  getArikteak(): Observable<Ariketa[]> {
    return from(this.sqliteService.fetchDataAndSave<Ariketa>(this.httpClient,'ariketak', 'Ariketa'));
  }
  getAriketaById(id:number): Observable<Ariketa | undefined>{
    return from(this.sqliteService.fetchDataAndSave<Ariketa>(this.httpClient,'ariketak', 'Ariketa')).pipe(
      map(ariketak => ariketak.find(ariketa => ariketa.id_erronka === id)), // Filtrar por ID DE LA ERRONKA
      catchError(error => {
        console.error('Error al obtener ariketa:', error);
        return of(undefined); // Devuelve undefined si hay error
      })
    );
  }

  gertAudioak(): Observable<Audioa[]> {
    return from(this.sqliteService.fetchDataAndSave<Audioa>(this.httpClient,'audioak', 'Audioa'));
  }

  getAudioaById(id:number,id_ariketa:number): Observable<Audioa | undefined>{
    return from(this.sqliteService.fetchDataAndSave<Audioa>(this.httpClient,'audioak', 'Audioa')).pipe(
      map(audioak => audioak.find(audioa => audioa.id === id && audioa.id_ariketa === id_ariketa)), // Filtrar por ID
      catchError(error => {
        console.error('Error al obtener audioa:', error);
        return of(undefined); // Devuelve undefined si hay error
      })
    );
  }
  getAukeraZuzenak(): Observable<AukeraZuzena[]> {
    return from(this.sqliteService.fetchDataAndSave<AukeraZuzena>(this.httpClient,'aukera-zuzena', 'AukeraZuzena'));
  }

  gertErantzunak(): Observable<Erantzunak[]> {
    return from(this.sqliteService.fetchDataAndSave<Erantzunak>(this.httpClient,'erantzunak', 'Erantzunak'));
  }

  getEsaldiaBete(): Observable<EsaldiaBete[]> {
    return from(this.sqliteService.fetchDataAndSave<EsaldiaBete>(this.httpClient,'esaldia-bete', 'EsaldiaBete'));
  }

  getFunikularrak(): Observable<Funikularra[]> {
    return from(this.sqliteService.fetchDataAndSave<Funikularra>(this.httpClient,'funikularra', 'Funikularra'));
  }

  getHizkiakBete(): Observable<HizkiakBete[]> {
    return from(this.sqliteService.fetchDataAndSave<HizkiakBete>(this.httpClient,'hizkiak-bete', 'HizkiakBete'));
  }

  getLokalizazioak(): Observable<Lokalizazioa[]> {
    return from(this.sqliteService.fetchDataAndSave<Lokalizazioa>(this.httpClient,'lokalizazioa', 'Lokalizazioa'));
  }

  getMutikoaJantzi(): Observable<MutikoaJantzi[]> {
    return from(this.sqliteService.fetchDataAndSave<MutikoaJantzi>(this.httpClient,'mutikua-jantzi', 'MutikoaJantzi'));
  }

  getOrdenatu(): Observable<Ordenatu[]> {
    return from(this.sqliteService.fetchDataAndSave<Ordenatu>(this.httpClient,'ordenatu', 'Ordenatu'));
  }

  getParekatzekoGalderak(): Observable<ParekatzekoGaldera[]> {
    return from(this.sqliteService.fetchDataAndSave<ParekatzekoGaldera>(this.httpClient,'parekatzeko-galdera', 'ParekatzekoGaldera'));
  }

}




