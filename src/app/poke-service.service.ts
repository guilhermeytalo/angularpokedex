import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  tempData: [] = [];

 
  constructor() { }

  getTempData(key: string): any {
    const result = this.tempData[key];

    if (result != null) {
        this.tempData[key] = null;
    }

    return result;
}

  setTempData(key: string, value:any) {
    this.tempData[key] = value;
  }
}
