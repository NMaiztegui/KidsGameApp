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
import { SqliteService } from './sqlite.service';

import { NetworkService } from './network.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  private urlbase= 'http://10.0.2.2:8000/api';
  constructor(
    private httpClient: HttpClient,
    private sqliteService: SqliteService,
    private networkService: NetworkService,

   ) { }

   // Función genérica para obtener y guardar datos
  private async fetchDataAndSave<T>(endpoint: string, tableName: string): Promise<T[]> {
    const data = this.networkService.getStatus() 
      ? await this.httpClient.get<T[]>(`${this.urlbase}/${endpoint}`).toPromise()
      : await this.sqliteService.getData(tableName);

    if (data && this.networkService.getStatus()) {
      const existingData = await this.sqliteService.getData(tableName);
      if (existingData.length === 0) {
        await this.sqliteService.insertData(tableName, data);
      } else {
        console.log(`Los datos de ${tableName} ya existen en SQLite.`);
      }
    }

    return data || [];
  }

  // Métodos específicos para cada entidad
  getErronkak(): Observable<Erronka[]> {
    return from(this.fetchDataAndSave<Erronka>('erronkak', 'Erronka'));
  }
//convertir promesa en observable con from
  getArgazkiZuzenak(): Observable<ArgazkiaZuzena[]> {
    return from(this.fetchDataAndSave<ArgazkiaZuzena>('argazki-zuzena', 'ArgazkiaZuzena'));
  }

  getArikteak(): Observable<Ariketa[]> {
    return from(this.fetchDataAndSave<Ariketa>('ariketak', 'Ariketa'));
  }

  gertAudioak(): Observable<Audioa[]> {
    return from(this.fetchDataAndSave<Audioa>('audioak', 'Audioa'));
  }

  getAukeraZuzenak(): Observable<AukeraZuzena[]> {
    return from(this.fetchDataAndSave<AukeraZuzena>('aukera-zuzena', 'AukeraZuzena'));
  }

  gertErantzunak(): Observable<Erantzunak[]> {
    return from(this.fetchDataAndSave<Erantzunak>('erantzunak', 'Erantzunak'));
  }

  getEsaldiaBete(): Observable<EsaldiaBete[]> {
    return from(this.fetchDataAndSave<EsaldiaBete>('esaldia-bete', 'EsaldiaBete'));
  }

  getFunikularrak(): Observable<Funikularra[]> {
    return from(this.fetchDataAndSave<Funikularra>('funikularra', 'Funikularra'));
  }

  getHizkiakBete(): Observable<HizkiakBete[]> {
    return from(this.fetchDataAndSave<HizkiakBete>('hizkiak-bete', 'HizkiakBete'));
  }

  getLokalizazioak(): Observable<Lokalizazioa[]> {
    return from(this.fetchDataAndSave<Lokalizazioa>('lokalizazioa', 'Lokalizazioa'));
  }

  getMutikoaJantzi(): Observable<MutikoaJantzi[]> {
    return from(this.fetchDataAndSave<MutikoaJantzi>('mutikua-jantzi', 'MutikoaJantzi'));
  }

  getOrdenatu(): Observable<Ordenatu[]> {
    return from(this.fetchDataAndSave<Ordenatu>('ordenatu', 'Ordenatu'));
  }

  getParekatzekoGalderak(): Observable<ParekatzekoGaldera[]> {
    return from(this.fetchDataAndSave<ParekatzekoGaldera>('parekatzeko-galdera', 'ParekatzekoGaldera'));
  }

}




