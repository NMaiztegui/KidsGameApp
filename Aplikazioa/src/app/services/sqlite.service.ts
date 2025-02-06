import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NetworkService } from './network.service';
@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private storage!: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private urlbase= 'http://127.0.0.1:8000/api/';
  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
    private networkService: NetworkService,
  ) { 

    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'kidsappgame.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.storage = db;
        this.prepareTables();
      });
    });
  }

public async fetchDataAndSave<T>(httpClient: HttpClient,endpoint: string, tableName: string): Promise<T[]> {
    try {
      let data: T[] = [];

      if (this.networkService.getStatus()) {
        // Si hay conexión a la red
          data = await this.httpClient.get<T[]>(`${this.urlbase}${endpoint}`).toPromise() || [];
          
          // Guardar los datos en SQLite si la base de datos está vacía
          const existingData = await this.getData(tableName);
          if (existingData.length === 0) {
            await this.insertData(tableName, data);
          } else {
            console.log(`Los datos de ${tableName} ya existen en SQLite.`);
          }
      } else {
        // Si no hay conexión a la red, obtener los datos desde SQLite
        data = await this.getData(tableName);
      }

      return data;
    } catch (error) {
      console.error(`Error al obtener o guardar los datos de ${endpoint}:`, error);
      return [];
    }
  }
  prepareTables() {
    //Lehen aldia bada, taula sortuko du datu batzuekin (sqlPorter erabiltzen du sql-tik datubasera pasatzeko). Gero konexioa badago sinkronizatu eta amaieran getKlubak() exekutatuko da.
    this.httpClient.get(
      'assets/dump.sql', 
      {responseType: 'text'}
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
         
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }



//inser api data to sqlite
  public insertData(tableName: string, data: any[]) {
    let columns = Object.keys(data[0]).join(', ');
    let placeholders = Object.keys(data[0]).map(() => '?').join(', ');

    let queries = data.map(row => {
      let values = Object.values(row);
      return this.storage.executeSql(`INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`, values);
    });

    return Promise.all(queries);
  }

  public getDbState() {
    return this.isDbReady.asObservable();
  }

  public async getData(tableName: string) {
    const query = `SELECT * FROM ${tableName}`; 
    try {
      const result = await this.storage.executeSql(query, []);
      let data = [];
      for (let i = 0; i < result.rows.length; i++) {
        data.push(result.rows.item(i));
      }
      return data;
    } catch (error) {
      console.error("Error al obtener datos:", error);
      throw error;
    }
  }
}
