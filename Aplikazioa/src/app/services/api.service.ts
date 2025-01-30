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

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  private urlbase= 'http://10.0.2.2:8000/api';
  constructor(
    private httpClient: HttpClient,
    private sqliteService: SqliteService
   ) { }

  // obtener datos del API => guardar en SQLite => devuelve datos para manejar 

  getErronkak(): Observable<Erronka[]>{
    return new Observable(observer => {
      this.httpClient.get<Erronka[]>(`${this.urlbase}/erronkak`).subscribe(async data => {
        try {
          // Verificar si ya existen datos en SQLite antes de insertar
          const existingData = await this.sqliteService.getData('erronka');  
          if (existingData.length === 0) {
            await this.sqliteService.insertData('Erronka', data);
          } else {
            console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
          }
          observer.next(data);
          observer.complete();
        } catch (error) {
          observer.error(error);
        }
      }, error => {
        observer.error(error);
      });
    });
  }

  getArgazkiZuzenak():Observable<ArgazkiaZuzena[]>{
    return new Observable(observer =>{
       this.httpClient.get<ArgazkiaZuzena[]>(`${this.urlbase}/argazki-zuzena`).subscribe( async data => {
        try {
          const existingData = await this.sqliteService.getData('ArgazkiaZuzena');
          if (existingData.length === 0) {
            await this.sqliteService.insertData('ArgazkiaZuzena', data);
          } else {
            console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
          }
          observer.next(data);
          observer.complete();
        } catch (error) {
          observer.error(error);
        }
      
      }, error => {
        observer.error(error);
      });
    });
    
  }
  getArikteak():Observable<Ariketa[]>{
    return new Observable(observer =>{
      this.httpClient.get<Ariketa[]>(`${this.urlbase}/ariketak`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('Ariketa');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('Ariketa', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }
  gertAudioak():Observable<Audioa[]>{
    return new Observable(observer =>{
      this.httpClient.get<Audioa[]>(`${this.urlbase}/audioak`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('Audioa');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('Audioa', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }

  getAukeraZuzenak():Observable<AukeraZuzena[]>{
    return new Observable(observer =>{
      this.httpClient.get<AukeraZuzena[]>(`${this.urlbase}/aukera-zuzena`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('AukeraZuzena');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('AukeraZuzena', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }

  gertErantzunak():Observable<Erantzunak[]>{
    return new Observable(observer =>{
      this.httpClient.get<Erantzunak[]>(`${this.urlbase}/erantzunak`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('Erantzunak');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('Erantzunak', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }

  getEsaldiaBete():Observable<EsaldiaBete[]>{
    return new Observable(observer =>{
      this.httpClient.get<EsaldiaBete[]>(`${this.urlbase}/esaldia-bete`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('EsaldiaBete');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('EsaldiaBete', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }

  getFunikularrak():Observable<Funikularra[]>{
    return new Observable(observer =>{
      this.httpClient.get<Funikularra[]>(`${this.urlbase}/funikularra`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('Funikularra');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('Funikularra', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }

  getHizkiakBete():Observable<HizkiakBete[]>{
    return new Observable(observer =>{
      this.httpClient.get<HizkiakBete[]>(`${this.urlbase}/hizkiak-bete`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('HizkiakBete');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('HizkiakBete', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }

  getLokalizazioak():Observable<Lokalizazioa[]>{
    return new Observable(observer =>{
      this.httpClient.get<Lokalizazioa[]>(`${this.urlbase}/lokalizazioa`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('Lokalizazioa');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('Lokalizazioa', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }

  getMutikoaJantzi():Observable<MutikoaJantzi[]>{
    return new Observable(observer =>{
      this.httpClient.get<MutikoaJantzi[]>(`${this.urlbase}/mutikua-jantzi`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('MutikoaJantzi');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('MutikoaJantzi', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }

  getOrdenatu():Observable<Ordenatu[]>{
    return new Observable(observer =>{
      this.httpClient.get<Ordenatu[]>(`${this.urlbase}/ordenatu`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('Ordenatu');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('Ordenatu', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }

  getParekatzekoGalderak():Observable<ParekatzekoGaldera[]>{
    return new Observable(observer =>{
      this.httpClient.get<ParekatzekoGaldera[]>(`${this.urlbase}/parekatzeko-galdera`).subscribe( async data => {
       try {
         const existingData = await this.sqliteService.getData('ParekatzekoGaldera');
         if (existingData.length === 0) {
           await this.sqliteService.insertData('ParekatzekoGaldera', data);
         } else {
           console.log("Los datos ya existen en SQLite, no se insertan nuevamente.");
         }
         observer.next(data);
         observer.complete();
       } catch (error) {
         observer.error(error);
       }
     
     }, error => {
       observer.error(error);
     });
   });
  }
}
