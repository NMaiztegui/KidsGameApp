import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private storage!: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private sqlite: SQLite, private platform: Platform) { 

    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'kidsappgame.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.storage = db;
        this.isDbReady.next(true);
      });
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
    const query = `SELECT * FROM ?`; 
    try {
      const result = await this.storage.executeSql(query, [tableName]);
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
