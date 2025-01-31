import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  connected = true;
  constructor() {  this.checkInitialStatus();

    Network.addListener('networkStatusChange', async status => {
        console.log('Sarearen konexioa aldatu da:', status);
        this.connected = status.connected;
      });
  }
  async checkInitialStatus() {
    const status = await Network.getStatus();
    console.log('Sarearen hasierako egoera:', status);
    this.connected = status.connected;
  }
  getStatus(): boolean {
    return this.connected;
  }
}
